import heroImage from "@/assets/hero-calm-woman.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FACEBOOK_URL = "https://www.facebook.com/LearningWhileHealing/";

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
        {/* Enhanced overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20 md:from-background/90 md:via-background/65 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-background/40" />
        {/* Additional mobile overlay for text area */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-background/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center md:text-left md:ml-[8%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-1.5 mb-5 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary/70" />
            <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-primary">
              Registration Closed
            </p>
          </div>
        </motion.div>
        
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 drop-shadow-sm leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          This Batch Is Officially Full
        </motion.h1>
        
        <motion.p
          className="font-serif text-lg md:text-xl lg:text-2xl text-foreground/90 italic mb-8 max-w-xl leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Thank you for the beautiful response. All available slots for this round have been filled.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-foreground/85 mb-8 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          We will see this group very soon. And we would love to welcome you in the next batch.
        </motion.p>

        <motion.div
          className="flex flex-col items-center md:items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="calm" size="calm">
              Follow Our Facebook Page
            </Button>
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/75 underline-offset-4 hover:underline transition-colors"
          >
            Next batch announcements will be posted there first.
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
