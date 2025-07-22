import { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const galleryImages = [gallery1, gallery2, gallery3];

export const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 relative flourish">
            Un recorrido por estos 15 años
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Junto a personas que son muy importantes en mi vida
          </p>
          <div className="flex justify-center">
            <Camera className="h-10 w-10 text-coral animate-float" />
          </div>
        </div>

        <div className="relative bg-white rounded-2xl shadow-elegant border border-coral/10 overflow-hidden">
          <div className="relative aspect-video">
            <img 
              src={galleryImages[currentImage]} 
              alt={`Recuerdo ${currentImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            <Button
              onClick={prevImage}
              variant="secondary"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-coral shadow-soft rounded-full p-3"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={nextImage}
              variant="secondary"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-coral shadow-soft rounded-full p-3"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-2 p-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-coral shadow-glow' 
                    : 'bg-muted hover:bg-coral/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};