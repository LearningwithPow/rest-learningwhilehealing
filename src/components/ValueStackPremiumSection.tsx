import { Check, Flame, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";

const ValueStackPremiumSection = () => {
  const inclusions = [
    { item: "3 Coaching Nights (2 hrs each)", value: "₱15,000" },
    { item: "Reflection Workbook", value: "₱500" },
    { item: "Emotional Regulation Tools", value: "₱1,000" },
    { item: "Guided Support", value: "₱2,500" },
    { item: "Safe Community", value: "Priceless" },
  ];

  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,20%,97%)] to-background">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Micro text */}
        <ScrollReveal>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-3 sm:mb-4">
            Limited Offer
          </p>
        </ScrollReveal>

        {/* Main headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 sm:mb-4 leading-[1.15]">
            REST Reset Is More Than a Workshop
          </h2>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            3 guided coaching nights designed to help you declutter, regulate, and renew deeply.
          </p>
        </ScrollReveal>

        {/* Two Column Layout */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto items-stretch">
            {/* Left Card - What's Included */}
            <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft border border-primary/10 text-left">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5 sm:mb-6">
                Your ₱999 Includes:
              </h3>

              <ul className="space-y-3.5 sm:space-y-4">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="text-[15px] sm:text-base text-foreground leading-snug">{item.item}</span>
                      <span className="text-muted-foreground text-sm tabular-nums">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card - Value Highlight */}
            <div className="bg-primary/5 rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft border border-primary/20 text-left flex flex-col justify-center">
              <div className="text-center mb-5 sm:mb-6">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-[0.18em] mb-2">
                  Total Value
                </p>
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground/80 line-through">
                  ₱19,000+
                </p>
              </div>

              <div className="bg-card rounded-xl p-5 sm:p-6 text-center mb-5 sm:mb-6 shadow-soft">
                <div className="mb-5">
                  <CountdownTimer
                    targetDate="2026-06-07T23:59:00+08:00"
                    label="Early Bird Price Ends In"
                    endedMessage="Early Bird has ended. Regular price ₱1,499 now applies."
                    belowText="After June 7, price increases to ₱1,499"
                    variant="prominent"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wide">
                  Today Only
                </p>
                <p className="font-serif text-5xl md:text-5xl font-bold text-primary mb-3 leading-none">
                  ₱999
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                  <Flame className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground/80">You Save ₱18,000+</span>
                </div>
              </div>

              <a
                href="https://checkout.xendit.co/od/RESTJune2026"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="calm" size="calm" className="w-full text-base">
                  Yes, I Want REST Reset
                </Button>
              </a>

              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/80">
                <Timer className="w-4 h-4 flex-shrink-0" />
                <p className="text-[11px] sm:text-xs">
                  Starts June 9 • Small group only
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueStackPremiumSection;