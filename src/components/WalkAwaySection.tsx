import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WalkAwaySection = () => {
  const benefits = [
    "A personal toolbox of mindfulness and nervous system regulation skills so you can calm yourself anytime and support the people you love",
    "The ability to create inner safety on demand instead of being hijacked by stress, emotions, or overthinking",
    "A repeatable inner process for sorting mental and emotional clutter so overwhelm no longer runs your decisions",
    "The confidence to respond to yourself with clarity and compassion instead of self-criticism",
    "Lived experience of practicing reflection inside a safe, guided container so you embody what you learn",
    "Belonging to a grounded, faith-aligned community of like-minded women inside the Learning While Healing circle",
  ];

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            What You Walk Away With After REST Reset
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Real skills. Real clarity. Real inner stability you can return to.
          </p>
        </ScrollReveal>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-left">
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={0.12 + index * 0.06}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 min-w-[2rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-base md:text-lg font-semibold text-foreground mt-8">
            You don't just learn tools. You become someone who knows how to create inner order.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WalkAwaySection;
