import { ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

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
            You Do Not Need To Carry This Alone Anymore
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Join REST Reset and give your mind, body, and soul space to breathe again.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.15}>
          <div className="bg-primary/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 inline-block">
            <p className="text-sm sm:text-base text-muted-foreground">
              Limited slots only • Starts July 28
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <a href="https://checkout.xendit.co/od/RESTJuly2026">
            <Button variant="calm" size="calm" className="text-base">
              Yes, I'm Ready for Renewal
            </Button>
          </a>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Secure checkout via Xendit • GCash • Maya • Debit Cards accepted
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 text-muted-foreground/70">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <p className="text-[10px] sm:text-xs">
              Your information is protected and secure
            </p>
          </div>
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
