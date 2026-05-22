import ScrollReveal from "@/components/ScrollReveal";
import day1 from "@/assets/day-1.png";
import day2 from "@/assets/day-2.png";
import day3 from "@/assets/day-3.png";

const images = [
  { src: day1, alt: "Day 1 — Stop fighting reality, start regulating through truth" },
  { src: day2, alt: "Day 2 — You don't need to rush healing" },
  { src: day3, alt: "Day 3 — Something shifted: lighter, calmer, more at peace" },
];

const JourneySection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              From Day 1 to Day 3, this is what happens inside REST Reset
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real women. Real evenings. Real shifts.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
            {images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-muted-foreground/80 italic mt-8">
            Batch 1 • April 2026 • REST Reset
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex justify-center mt-8">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              I Want This For Myself →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default JourneySection;