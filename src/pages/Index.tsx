import { useState, useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { WelcomeModal } from '@/components/WelcomeModal';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CelebrationSection } from '@/components/CelebrationSection';
import { PhotoGallery } from '@/components/PhotoGallery';
import { PartySection } from '@/components/PartySection';
import { GiftsSection } from '@/components/GiftsSection';
import { FooterSection } from '@/components/FooterSection';
import { WaveDivider } from '@/components/WaveDivider';
import MusicPlayer, { MusicPlayerHandle } from '@/components/MusicPlayer';

const Index = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  const handleEnterWithMusic = () => {
    setMusicStarted(true);
    // Small delay to ensure the component is rendered
    setTimeout(() => {
      musicPlayerRef.current?.playWithSound();
    }, 500);
  };

  const handleEnterWithoutMusic = () => {
    setMusicStarted(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contenedor principal centrado */}
      <div className="max-w-[1100px] mx-auto bg-white shadow-elegant relative">
        
        {/* Welcome Modal */}
        <WelcomeModal 
          isOpen={showWelcomeModal}
          onClose={() => setShowWelcomeModal(false)}
          onEnterWithMusic={handleEnterWithMusic}
          onEnterWithoutMusic={handleEnterWithoutMusic}
        />

        {/* Music Player */}
        {musicStarted && (
          <MusicPlayer 
            ref={musicPlayerRef}
            youtubeVideoId="dQw4w9WgXcQ" // Reemplazar con el ID del video de YouTube deseado
            autoStart={false}
          />
        )}

        {/* Hero Section */}
        <HeroSection />

        {/* Countdown Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-6">
            <CountdownTimer />
          </div>
        </section>

        {/* Wave Divider */}
        <WaveDivider className="text-pink-soft" />

        {/* Celebration Section */}
        <CelebrationSection />

        {/* Wave Divider */}
        <WaveDivider className="text-white" flip />

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* Wave Divider */}
        <WaveDivider className="text-pink-soft" />

        {/* Party Section */}
        <PartySection />

        {/* Wave Divider */}
        <WaveDivider className="text-white" flip />

        {/* Gifts Section */}
        <GiftsSection />

        {/* Wave Divider */}
        <WaveDivider className="text-coral" />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;