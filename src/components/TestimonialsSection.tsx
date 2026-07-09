import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    label: "Faith + Science Healing",
    quote:
      "Combining science and faith brought a different kind of healing. This experience was truly a blessing.",
    name: "Alfreash",
  },
  {
    label: "Reduced Anxiety + Peace",
    quote:
      "My anxiety lessened. I gained healthier habits, more peace of mind, and experienced real life change.",
    name: "Maxine M., 23",
  },
  {
    label: "Courage Again",
    quote:
      "I was carrying unhealthy patterns for years. I learned to reject negative thoughts and found courage again.",
    name: "Marlene D., 58",
  },
  {
    label: "Peace in a Dark Season",
    quote:
      "During one of my darkest seasons, Coach Pow was a beacon of light. The process felt comforting, peaceful, and life-changing.",
    name: "Jane T., 36",
  },
  {
    label: "Calm + Practical Tools",
    quote:
      "I became more relaxed and calm. I learned practical tools and started understanding my emotions better.",
    name: "Jhomar",
  },
  {
    label: "Clear + Helpful Guidance",
    quote:
      "Very knowledgeable, clear, and practical. The worksheets truly helped me apply what I learned.",
    name: "Tiffany",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Real Stories. Real Peace. Real Transformation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              What others experienced through Learning While Healing with Coach Pow.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.label} delay={0.1 + index * 0.06}>
              <article className="h-full bg-background rounded-2xl p-7 md:p-8 shadow-soft flex flex-col transition-all duration-500 hover:shadow-glow">
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

        <ScrollReveal delay={0.5}>
          <p className="text-center text-sm md:text-base text-muted-foreground mt-12 max-w-2xl mx-auto">
            Trusted by clients seeking peace, clarity, emotional healing, and faith-aligned growth.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;