import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Music, VolumeX, Heart } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterWithMusic: () => void;
  onEnterWithoutMusic: () => void;
}

export const WelcomeModal = ({ isOpen, onClose, onEnterWithMusic, onEnterWithoutMusic }: WelcomeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="bg-white/95 backdrop-blur-sm border-coral/20 shadow-elegant max-w-md">
        <div className="text-center space-y-6 p-4">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-coral animate-heartbeat" />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-serif text-foreground font-bold">
              ¡Estás invitada a mis XV!
            </h2>
            <p className="text-muted-foreground">
              Ven conmigo a celebrar este día especial
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => {
                onEnterWithMusic();
                onClose();
              }}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300 group"
            >
              <Music className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Entrar con música
            </Button>
            
            <Button 
              onClick={() => {
                onEnterWithoutMusic();
                onClose();
              }}
              variant="outline" 
              className="border-coral text-coral hover:bg-coral-light transition-all duration-300"
            >
              <VolumeX className="mr-2 h-4 w-4" />
              Entrar sin música
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};