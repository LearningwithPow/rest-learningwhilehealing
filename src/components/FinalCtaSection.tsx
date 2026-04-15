import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCtaSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            You don't have to carry everything alone
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            REST Reset is an invitation to pause, breathe, and gently untangle 
            what has been weighing on your heart and mind.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            If you feel ready to create a little more space within, 
            you are welcome here.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-[hsl(270,30%,95%)] rounded-2xl px-6 py-4 mb-10 inline-block">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Limited slots only to keep the space safe and intentional.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <a href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird" target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm">
              Reserve Your Spot
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/70">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs">
              Secure checkout via Xendit. GCash, Maya, QRPH, and debit card payments accepted.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Footer */}
        <ScrollReveal delay={0.4}>
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
