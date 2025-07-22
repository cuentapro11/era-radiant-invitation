import heroImage from '@/assets/hero-quinceañera.jpg';

export const HeroSection = () => {
  return (
    <div 
      className="parallax-hero relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${heroImage})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Mis XV Años
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Rosmery
          </p>
          <div className="text-lg md:text-xl">
            25 de agosto • 3:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};