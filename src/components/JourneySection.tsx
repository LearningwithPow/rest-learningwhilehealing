import ScrollReveal from "@/components/ScrollReveal";
import { Quote } from "lucide-react";
import day1 from "@/assets/day-1.png";
import day2 from "@/assets/day-2.png";
import day3 from "@/assets/day-3.png";

const images = [
  { src: day1, alt: "Day 1 — Stop fighting reality, start regulating through truth" },
  { src: day2, alt: "Day 2 — You don't need to rush healing" },
  { src: day3, alt: "Day 3 — Something shifted: lighter, calmer, more at peace" },
];

const batchTestimonials = [
  {
    label: "From Overwhelmed to Enlightened",
    quote:
      "I came in upset and overwhelmed. I left enlightened, seeing truths I'd taken for granted, and with a deep desire to know God intentionally. I'm a work in progress, and that's okay.",
    name: "REST Reset Participant, Batch 1",
  },
  {
    label: "Okay to Reach Out",
    quote:
      "Before REST Reset, I was carrying so much worry. But in just three days, my whole mindset changed. I learned it's okay to open up and reach out, because there really are people who will listen and are willing to help. It was so meaningful and impactful for me.",
    name: "J.A., Batch 1",
  },
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

        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
                In Their Own Words
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Real reflections from the women who joined our April 2026 REST Reset.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {batchTestimonials.map((t, index) => (
              <ScrollReveal key={t.label} delay={0.15 + index * 0.08}>
                <article className="h-full bg-card rounded-2xl p-7 md:p-8 shadow-soft flex flex-col transition-all duration-500 hover:shadow-glow">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium tracking-wide text-accent-foreground">
                      {t.label}
                    </span>
                    <Quote className="w-5 h-5 text-primary/40" aria-hidden="true" />
                  </div>
                  <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                    "{t.quote}"
                  </p>
                  <p className="mt-auto text-sm text-muted-foreground/80 italic">
                    — {t.name}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

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