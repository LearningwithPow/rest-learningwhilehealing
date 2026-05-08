import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const PainResonanceSection = () => {
  const points = [
    {
      text: "Mentally tired but unable to rest",
      subtext: "Your mind keeps running even when your body is still"
    },
    {
      text: "Emotionally heavy",
      subtext: "Carrying feelings you have not had space to process"
    },
    {
      text: "Overthinking everything",
      subtext: "Analyzing conversations, decisions, and what-ifs on repeat"
    },
    {
      text: "Self-aware but still stuck",
      subtext: "You know what is wrong but cannot seem to shift it"
    },
  ];

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">
            You Are Not Alone
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Does This Sound Like You?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            If you have been feeling any of these lately, REST Reset was designed specifically for this season.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-5 text-left max-w-xl mx-auto mb-10">
          {points.map((point, index) => (
            <ScrollReveal key={point.text} delay={0.15 + index * 0.08}>
              <div className="bg-card rounded-xl p-5 shadow-soft border border-primary/5">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>{point.text}</span>
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-2 ml-6">
                  {point.subtext}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-8">
            <p className="font-serif text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              You do not have to figure this out alone. REST Reset is your guided path back to peace.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <a
            href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="calm" size="calm">
              Yes, I Need This Reset
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Starts June 9 • Small group only
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainResonanceSection;
