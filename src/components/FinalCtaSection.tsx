import { Facebook, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCtaSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-card via-background to-card">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">Stay Connected</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            Be the First to Know About the Next REST Reset
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Our June 2026 group has already begun. Follow our Facebook community to hear when the next group opens, and to receive gentle encouragement along the way.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <a href="https://www.facebook.com/LearningWhileHealing/" target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm" className="text-base">
              <Facebook className="w-5 h-5" />
              Follow Us on Facebook
            </Button>
          </a>
        </ScrollReveal>
        
        <ScrollReveal delay={0.25}>
          <p className="text-xs sm:text-sm text-muted-foreground/60 italic mt-6 sm:mt-8 max-w-lg mx-auto">
            Sometimes healing begins when we say yes and let God lead the next step.
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
