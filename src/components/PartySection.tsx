import { useState } from 'react';
import { Music, Shirt, Info, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export const PartySection = () => {
  const [showDressCode, setShowDressCode] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleSuggestSong = () => {
    const message = "¡Hola! Me gustaría sugerir una canción para la playlist de los XV años de Rosmery 🎵";
    const whatsappUrl = `https://wa.me/18491234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 relative flourish">
            Fiesta
          </h2>
          <p className="text-xl text-muted-foreground">
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Música */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <div className="bg-coral-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Music className="h-8 w-8 text-coral group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Música</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
            </p>
            <Button 
              onClick={handleSuggestSong}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300"
            >
              Sugerir canción
            </Button>
          </div>

          {/* Código de vestimenta */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <div className="bg-coral-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shirt className="h-8 w-8 text-coral group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Código de vestimenta</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Una orientación para tu vestuario
            </p>
            <Button 
              onClick={() => setShowDressCode(true)}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300"
            >
              Ver más
            </Button>
          </div>

          {/* Tips y Notas */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <div className="bg-coral-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Info className="h-8 w-8 text-coral group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Tips y Notas</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Información adicional para tener en cuenta
            </p>
            <Button 
              onClick={() => setShowTips(true)}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300"
            >
              + Info
            </Button>
          </div>
        </div>
      </div>

      {/* Dress Code Modal */}
      <Dialog open={showDressCode} onOpenChange={setShowDressCode}>
        <DialogContent className="bg-white border-coral/20 shadow-elegant max-w-md">
          <div className="text-center space-y-4 p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-foreground">Código de Vestimenta</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowDressCode(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-coral font-medium text-lg">
              Pantalón fino y camisa roja
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tips Modal */}
      <Dialog open={showTips} onOpenChange={setShowTips}>
        <DialogContent className="bg-white border-coral/20 shadow-elegant max-w-md">
          <div className="text-center space-y-4 p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-foreground">Tips y Notas</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowTips(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-coral font-medium text-lg">
              No menores de 15 años
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};