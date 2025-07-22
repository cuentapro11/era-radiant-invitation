import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-25T15:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-elegant border border-coral/10 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft opacity-30"></div>
      <div className="relative z-10 text-center space-y-6">
        <div className="flex justify-center">
          <Clock className="h-8 w-8 text-coral animate-pulse" />
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-foreground">
          Faltan solo...
        </h3>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-coral text-white rounded-xl p-4 shadow-soft">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-sm opacity-90">Días</div>
          </div>
          <div className="bg-coral text-white rounded-xl p-4 shadow-soft">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm opacity-90">Horas</div>
          </div>
          <div className="bg-coral text-white rounded-xl p-4 shadow-soft">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm opacity-90">Min</div>
          </div>
          <div className="bg-coral text-white rounded-xl p-4 shadow-soft">
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm opacity-90">Seg</div>
          </div>
        </div>
        
        <p className="text-muted-foreground font-serif italic">
          25 de agosto de 2025 a las 3:00 PM
        </p>
      </div>
    </div>
  );
};