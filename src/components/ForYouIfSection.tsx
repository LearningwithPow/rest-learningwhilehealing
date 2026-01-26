import ScrollReveal from "@/components/ScrollReveal";

const ForYouIfSection = () => {
  const points = [
    "You feel stuck but deeply self-aware",
    "Your mind feels full even when life looks okay",
    "You long for emotional order, not quick fixes",
    "You desire clarity without pressure",
    "You want a safe, grounded space to reflect",
    "You believe God is a God of order, not confusion",
  ];

  return (
    <section className="section-calm bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 leading-tight">
            This Experience Is For You If…
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-5 text-left max-w-xl mx-auto">
          {points.map((point, index) => (
            <ScrollReveal key={index} delay={0.1 + index * 0.1}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary/70 flex-shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed">{point}</span>
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouIfSection;
