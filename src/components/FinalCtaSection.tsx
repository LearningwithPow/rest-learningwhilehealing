import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
          You don't have to carry it all alone
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          REST Reset is an invitation to pause, breathe, and gently untangle what's been weighing on you. 
          If you're ready to create a little more space inside, we'd love to welcome you.
        </p>
        
        <p className="text-base text-muted-foreground italic mb-10">
          "Come to Me, all who are weary and burdened, and I will give you rest."
          <span className="block mt-1 not-italic">— Matthew 11:28</span>
        </p>
        
        <Button variant="calm" size="calm">
          Join REST Reset
        </Button>
        
        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Learning While Healing. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
