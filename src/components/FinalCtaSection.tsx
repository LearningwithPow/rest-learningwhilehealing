import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCtaSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-card via-background to-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">A Gentle Invitation</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            You Do Not Need to Carry This Alone Anymore
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Join REST Reset and give your mind, body, and soul room to breathe again.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.15}>
          <div className="bg-primary/10 rounded-2xl px-6 py-4 mb-8 inline-block">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Limited Availability</span>
            </div>
            <p className="text-base text-muted-foreground">
              Small group only. Registration closes once slots are full.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <a href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird" target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm">
              Yes, I'm Ready
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Starts April 28 • Small group only
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/70">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs">
              Secure checkout via Xendit. GCash, Maya, QRPH, and debit card payments accepted.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Footer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-24 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Learning While Healing. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
