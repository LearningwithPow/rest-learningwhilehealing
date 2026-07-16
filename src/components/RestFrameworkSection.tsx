import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { trackLead } from "@/lib/meta-pixel";

const RestFrameworkSection = () => {
  const steps = [
    "Regulate stress first",
    "Explore inner clutter safely",
    "Separate truth from noise",
    "Talk to yourself like a coach",
  ];

  return (
    <section className="section-calm bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
            The REST Method You'll Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft text-left">
            <ul className="flex flex-col gap-4">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-4">
                  <div className="w-9 h-9 min-w-[2.25rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-8 pt-6 border-t border-border text-center">
              This gentle framework is applied live across all 3 guided evenings.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <a
              href="https://checkout.xendit.co/od/RESTJuly2026"
              onClick={trackLead}
            >
              <Button variant="calm" size="calm">
                Yes, I Need This Reset
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RestFrameworkSection;
