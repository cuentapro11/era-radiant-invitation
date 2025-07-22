import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export interface MusicPlayerHandle {
  playWithSound: () => void;
}

interface MusicPlayerProps {
  youtubeVideoId?: string;
  autoStart?: boolean;
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  ({ youtubeVideoId = "dQw4w9WgXcQ", autoStart = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const playerRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      playWithSound: () => {
        if (playerRef.current && isLoaded) {
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      },
    }));

    useEffect(() => {
      const loadPlayer = () => {
        playerRef.current = new (window as any).YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: autoStart ? 1 : 0,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: youtubeVideoId,
            mute: 1, // empieza en mute
          },
          events: {
            onReady: () => setIsLoaded(true),
            onStateChange: (event: any) => {
              const YT = (window as any).YT;
              if (event.data === YT?.PlayerState.PLAYING) setIsPlaying(true);
              if (event.data === YT?.PlayerState.PAUSED) setIsPlaying(false);
            },
          },
        });
      };

      if (!(window as any).YT || !(window as any).YT.Player) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        (window as any).onYouTubeIframeAPIReady = loadPlayer;
      } else {
        loadPlayer();
      }

      return () => playerRef.current?.destroy();
    }, [youtubeVideoId, autoStart]);

    const togglePlayPause = () => {
      if (playerRef.current && isLoaded) {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.unMute();
          playerRef.current.playVideo();
        }
      }
    };

    return (
      <div className="fixed top-4 right-4 z-50">
        <div
          id="youtube-player"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        ></div>
        <Button
          onClick={togglePlayPause}
          variant="secondary"
          size="sm"
          className="bg-coral hover:bg-coral-dark text-white shadow-elegant hover:shadow-glow transition-all duration-300 animate-float rounded-full p-3"
          disabled={!isLoaded}
        >
          {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </Button>
      </div>
    );
  }
);

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;