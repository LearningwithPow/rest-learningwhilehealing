import { Check, ShieldCheck, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ValueStackSection = () => {
  const inclusions = [
    { item: "3 Live Guided Coaching Nights", value: "₱4,500" },
    { item: "REST Reflection Workbook", value: "₱800" },
    { item: "Emotional Regulation Toolkit", value: "₱1,200" },
    { item: "Small Group Support Access", value: "₱1,500" },
    { item: "Lifetime Framework Access", value: "₱2,000" },
  ];

  const totalValue = 10000;
  const earlyBirdPrice = 999;

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">
            Everything You Receive
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            What Your Investment Includes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            A complete transformation experience — designed to be gentle, grounding, and lasting.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-left">
            <ul className="flex flex-col gap-4">
              {inclusions.map((item) => (
                <li
                  key={item.item}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 min-w-[2rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-lg text-foreground leading-relaxed pt-1">
                      {item.item}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-muted-foreground">Total Value</span>
                <span className="text-2xl font-serif text-muted-foreground line-through">₱{totalValue.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-foreground">Your Investment</span>
                <div className="text-right">
                  <span className="text-3xl md:text-4xl font-serif font-semibold text-primary">₱{earlyBirdPrice.toLocaleString()}</span>
                  <div className="inline-flex items-center gap-1.5 ml-2 rounded-full bg-primary/10 px-2 py-0.5">
                    <Flame className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-foreground/80">Early Bird</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Less than ₱333 per guided evening. Registration closes when slots fill.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10">
            <a
              href="https://checkout.xendit.co/od/RESTJuly2026"
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

export default ValueStackSection;