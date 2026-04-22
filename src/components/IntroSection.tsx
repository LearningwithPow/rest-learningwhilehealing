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
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            You're self-aware. You've reflected. Yet something inside still feels tangled.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            REST Reset is a gentle pause — a space to sort what's been weighing on you with compassion, structure, and care.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
