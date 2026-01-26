import heroImage from "@/assets/hero-calm-woman.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A woman sitting peacefully by a window, looking calm and reflective"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center md:text-left md:ml-[8%]">
        <div className="animate-gentle-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Learning While Healing
          </p>
        </div>
        
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 animate-gentle-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          REST Reset
        </h1>
        
        <p 
          className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/80 italic mb-4 animate-gentle-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          A Guided Inner Decluttering Experience
        </p>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 animate-gentle-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          Sort what's heavy with compassion and clarity.
        </p>
        
        <div 
          className="animate-gentle-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <Button variant="calm" size="calm">
            Join REST Reset
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-slow-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
