import heroImage from "@/assets/hero-calm-woman.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A woman sitting peacefully by a window, looking calm and reflective"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
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
          <p className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
            REST Reset July 2026 enrollment is now open 🙏
          </p>
        </motion.div>
        
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 drop-shadow-sm leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Stop Overthinking and Feel Like Yourself Again in 3 Guided Evenings
        </motion.h1>

        <motion.div
          className="mb-6 flex md:justify-start justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <CountdownTimer
            targetDate="2026-07-28T19:00:00+08:00"
            label="REST Reset Begins In"
            endedMessage="REST Reset is now live! 🙏"
            variant="minimal"
          />
        </motion.div>

        <motion.p
          className="font-serif text-lg md:text-xl lg:text-2xl text-foreground/90 italic mb-8 max-w-xl leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          A live, faith-rooted small-group reset for mentally tired women. We calm the overthinking using mindfulness and proven CBT tools, then anchor it all in God's presence so you can finally breathe again.
        </motion.p>

        <motion.ul
          className="flex flex-col gap-2 max-w-xl mx-auto md:mx-0 text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {[
            "July 28 to 30, 2026 (Tuesday to Thursday)",
            "7:00 PM to 9:30 PM via Zoom",
            "Small group only, so you are truly seen",
            "Faith-rooted, grounded in CBT and mindfulness",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-base md:text-lg text-foreground/90"
            >
              <span className="text-primary/80 flex-shrink-0 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="flex flex-col items-center md:items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <a
            href="https://checkout.xendit.co/od/RESTJuly2026"
          >
            <Button variant="calm" size="calm">
              Yes, I Need This Reset
            </Button>
          </a>
          <p className="text-sm text-foreground/70">
            Starts July 28. Limited seats available.
          </p>
          <p className="text-sm text-foreground/70 max-w-xl">
            Led by Coach Pow: certified CBT and mindfulness coach, certified Christian counselor, and former nurse.
          </p>
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
