import ScrollReveal from "@/components/ScrollReveal";

const PainResonanceSection = () => {
  const points = [
    "Mentally tired but unable to rest",
    "Emotionally heavy",
    "Overthinking everything",
    "Carrying stress quietly",
    "Self-aware but still stuck",
  ];

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
            If lately you've been…
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-4 text-left max-w-xl mx-auto mb-10">
          {points.map((point, index) => (
            <ScrollReveal key={point} delay={0.1 + index * 0.08}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary/70 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{point}</span>
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.55}>
          <p className="font-serif text-xl md:text-2xl font-medium text-foreground">
            REST Reset was created for this season.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainResonanceSection;