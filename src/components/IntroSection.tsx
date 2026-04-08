import ScrollReveal from "@/components/ScrollReveal";

const IntroSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-8 leading-relaxed">
            You may not feel broken — just tired of carrying too much.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-normal">
            REST Reset is created for individuals who feel emotionally heavy, mentally cluttered, 
            and quietly longing for clarity. You are self-aware. You've reflected. 
            You've tried to understand yourself.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Yet something inside still feels tangled.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This experience offers a gentle pause, a space to sort what's been weighing 
            on you with compassion, structure, and care.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
