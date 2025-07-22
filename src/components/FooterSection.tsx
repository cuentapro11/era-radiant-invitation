import { Heart, Sparkles } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="py-20 bg-gradient-coral text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="flex justify-center space-x-4">
            <Heart className="h-8 w-8 animate-heartbeat" />
            <Sparkles className="h-8 w-8 animate-pulse" />
            <Heart className="h-8 w-8 animate-heartbeat" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              Mis XV
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light">
              Rosmery
            </h3>
            <p className="text-xl opacity-90">
              Mis 15 años
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-70">
              25 de agosto de 2025 • 3:00 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};