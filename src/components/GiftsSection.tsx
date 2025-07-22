import { Gift, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const GiftsSection = () => {
  const handleGifts = () => {
    window.open('https://amazon.com', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="flex justify-center mb-6">
            <Gift className="h-12 w-12 text-coral animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 relative flourish">
            Regalos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Si deseas regalarme algo más que tu hermosa presencia...
          </p>
        </div>

        <div className="bg-gradient-soft rounded-2xl p-12 shadow-elegant border border-coral/10">
          <Button 
            onClick={handleGifts}
            className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300 group text-lg px-8 py-3"
          >
            Regalos
            <ExternalLink className="ml-2 h-5 w-5 group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
};