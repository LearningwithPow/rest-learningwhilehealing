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
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            If you feel ready to create a little more space within, 
            you are warmly welcome here.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <Button variant="calm" size="calm">
            Join REST Reset
          </Button>
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
