import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCtaSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
            You don't have to carry it all alone
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            REST Reset is an invitation to pause, breathe, and gently untangle what's been weighing on you. 
            If you're ready to create a little more space inside, we'd love to welcome you.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-base text-muted-foreground italic mb-10">
            "Come to Me, all who are weary and burdened, and I will give you rest."
            <span className="block mt-1 not-italic">— Matthew 11:28</span>
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
