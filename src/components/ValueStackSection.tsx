import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ValueStackSection = () => {
  const inclusions = [
    "3 Live Guided Coaching Nights",
    "REST Reflection Workbook",
    "Practical Mind Reset Tools",
    "Supportive Small Group Space",
    "Guided Emotional Processing",
    "Framework You Can Reuse for Life",
  ];

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            What Your ₱999 Includes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            A complete reset experience — designed to be gentle, grounding, and lasting.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-left">
            <ul className="flex flex-col gap-4">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 min-w-[2.25rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground leading-relaxed pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="font-serif text-xl md:text-2xl font-medium text-foreground">
                Worth ₱7,000+ in support, tools, and guided transformation
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10">
            <a
              href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="calm" size="calm">
                Save My Seat for April 28
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueStackSection;