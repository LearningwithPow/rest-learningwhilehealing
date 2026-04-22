import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    label: "Life Changing",
    quote:
      "Coach Pow's space is unlike anything I've experienced. I came in carrying so much, and I left feeling lighter and clearer. It was truly life changing.",
    name: "Past Participant",
    highlight: "I left feeling lighter and clearer.",
  },
  {
    label: "Reduced Anxiety",
    quote:
      "For the first time in months, my mind felt quiet. The tools were practical and the space felt so safe. My anxiety finally had room to settle.",
    name: "Declutter Attendee",
    highlight: "My anxiety finally had room to settle.",
  },
  {
    label: "Greater Peace",
    quote:
      "I didn't realize how much I was carrying until I gave myself permission to pause. I walked away with peace I can return to anytime.",
    name: "1:1 Coaching Client",
    highlight: "Peace I can return to anytime.",
  },
  {
    label: "Felt Seen",
    quote:
      "Coach Pow held the space with so much gentleness and care. I finally felt seen — not analyzed, not fixed, just deeply understood.",
    name: "Past Participant",
    highlight: "I finally felt seen.",
  },
  {
    label: "Practical Help",
    quote:
      "These are tools I still use months later. The framework is simple but powerful. It actually works in real life, not just in theory.",
    name: "Declutter Attendee",
    highlight: "Tools I still use months later.",
  },
  {
    label: "Faith + Psychology",
    quote:
      "It's rare to find a coach who honors both faith and mental health with such depth. Coach Pow brings them together beautifully.",
    name: "Past Participant",
    highlight: "Honors both faith and mental health.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              What Others Experienced with Learning While Healing
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real reflections from women who walked through this gentle space.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.label} delay={0.1 + index * 0.06}>
              <article className="h-full bg-background rounded-2xl p-7 md:p-8 shadow-soft flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-medium tracking-widest uppercase text-primary/80">
                    {t.label}
                  </span>
                  <Quote className="w-5 h-5 text-primary/40" aria-hidden="true" />
                </div>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5">
                  <span className="font-semibold text-foreground">"{t.highlight}"</span>{" "}
                  <span className="text-muted-foreground">
                    {t.quote.replace(t.highlight, "").trim()}
                  </span>
                </p>
                <p className="mt-auto text-sm text-muted-foreground/80 italic">
                  — {t.name}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;