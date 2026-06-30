import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const SalesBridgeSection = () => {
  const inclusions = [
    "3 Live Guided Coaching Nights",
    "Pre-Reset Self-Discovery Assessment",
    "Reflection Workbook",
    "Emotional Regulation Tools",
    "Guided Reflection Exercises",
    "Safe Small Group Support",
  ];

  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,20%,97%)] to-background">
      <div className="max-w-3xl mx-auto text-center">
        {/* Micro text */}
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">
            Learning While Healing
          </p>
        </ScrollReveal>

        {/* Main headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            A gentle reset, open to every woman.
          </h2>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Imagine what 3 guided evenings of gentle support can do.
          </p>
        </ScrollReveal>

        {/* Feature Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-primary/10 max-w-lg mx-auto mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6">
              REST Reset Includes:
            </h3>

            <ul className="space-y-4 text-left mb-8">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price Section */}
            <div className="border-t border-border pt-6 mb-6">
              <p className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                Early Bird: <span className="text-primary">₱999</span>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Less than ₱333 per guided evening
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <span className="text-xs font-medium text-foreground/80 tracking-wide">
                  Starts July 14 • Limited slots
                </span>
              </div>
              <p className="text-sm text-muted-foreground/90 leading-relaxed mt-5 text-left">
                We extended each session to 2.5 hours this round, because our past group told us the sharing was where the real breakthroughs happened. We didn't want to rush something so sacred. Hindi natin minamadali ang Diyos.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://checkout.xendit.co/od/RESTJune2026"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="calm" size="calm" className="w-full">
                Yes, I Need This Reset
              </Button>
            </a>

            {/* Trust text */}
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/70">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <p className="text-xs">
                Secure checkout via Xendit. GCash, Maya, cards accepted.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SalesBridgeSection;
