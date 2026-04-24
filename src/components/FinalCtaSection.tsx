import { Facebook, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FACEBOOK_URL = "https://www.facebook.com/LearningWhileHealing/";

const FinalCtaSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-card via-background to-card">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">A Gentle Invitation</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            Didn't make this round? You're still welcome here.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Follow Learning While Healing on Facebook for future openings, free encouragement, wellness tools, and first access to the next REST Reset batch.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm" className="text-base inline-flex items-center gap-2">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              Follow Learning While Healing
            </Button>
          </a>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Be the first to know when the next batch opens.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.25}>
          <p className="text-xs sm:text-sm text-muted-foreground/60 italic mt-6 sm:mt-8 max-w-lg mx-auto">
            Sometimes closed doors simply mean a new opening is being prepared.
          </p>
        </ScrollReveal>
        
        {/* Footer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Learning While Healing. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
