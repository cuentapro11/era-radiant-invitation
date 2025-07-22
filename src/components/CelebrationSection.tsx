import { Calendar, MapPin, Navigation, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CelebrationSection = () => {
  const handleSchedule = () => {
    const event = {
      title: 'XV Años de Rosmery',
      start: '20250825T150000',
      end: '20250825T230000',
      description: 'Celebración de XV años',
      location: 'Salón de eventos Arias, Avenida 27 de febrero esquina núñez'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleConfirmAttendance = () => {
    const message = "¡Hola! Confirmo mi asistencia a los XV años de Rosmery el 25 de agosto a las 3:00 PM 🎉";
    const whatsappUrl = `https://wa.me/18491234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewLocation = () => {
    const address = "Avenida 27 de febrero esquina núñez";
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-coral animate-heartbeat" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 relative flourish">
            La Celebración
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Día */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <Calendar className="h-12 w-12 text-coral mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Día</h3>
            <p className="text-muted-foreground mb-6">25 de agosto a las 3:00 PM</p>
            <Button 
              onClick={handleSchedule}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300 w-full"
            >
              Agendar
            </Button>
          </div>

          {/* Lugar */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <MapPin className="h-12 w-12 text-coral mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Lugar</h3>
            <p className="text-muted-foreground mb-6">Salón de eventos Arias</p>
            <Button 
              onClick={handleConfirmAttendance}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300 w-full"
            >
              Confirmar asistencia
            </Button>
          </div>

          {/* Dirección */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-coral/10 text-center group hover:shadow-glow transition-all duration-300">
            <Navigation className="h-12 w-12 text-coral mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Dirección</h3>
            <p className="text-muted-foreground mb-6">Avenida 27 de febrero esquina núñez</p>
            <Button 
              onClick={handleViewLocation}
              className="bg-coral hover:bg-coral-dark text-white shadow-soft hover:shadow-glow transition-all duration-300 w-full"
            >
              Ver ubicación
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};