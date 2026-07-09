import ScrollReveal from "@/components/ScrollReveal";
import spaceHome from "@/assets/space/space-2.png.asset.json";

const SpaceBonusSection = () => {
  return (
    <section className="section-calm bg-[hsl(270,30%,96%)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image — stacks above text on mobile */}
          <div className="order-1 lg:order-1">
            <ScrollReveal>
              <div className="relative flex justify-center items-center py-4">
                {/* Soft ambient glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-[80vw] max-w-[420px] aspect-square rounded-full bg-gradient-to-br from-primary/25 via-accent/30 to-[hsl(160,40%,75%)]/20 blur-3xl" />
                </div>

                {/* Phone frame */}
                <div className="relative w-[72vw] max-w-[280px] sm:w-[260px] aspect-[9/19.5] rounded-[2.5rem] bg-[#120e19] p-[4px] shadow-[0_40px_100px_-30px_hsl(270,40%,35%,0.45),0_10px_30px_-10px_hsl(270,30%,30%,0.22)] ring-1 ring-black/30">
                  {/* Screen */}
                  <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-card">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#120e19] rounded-full z-20" />
                    <img
                      src={spaceHome.url}
                      alt="SPACE app home screen showing daily peace practices"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <ScrollReveal>
              <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-primary/80 mb-4">
                BONUS · INCLUDED WITH YOUR SEAT
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] mb-6">
                Practice Between Sessions with SPACE
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Your seat includes 5 days of full premium access to{" "}
                <span className="text-foreground font-medium">SPACE</span>, our guided app for
                breathing, scripture, journaling, and evening wind-downs. Use it between our three
                evenings, so what you learn at night becomes what you practice the next day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                After the workshop, you'll be invited to continue as a founding member, but there's
                no obligation and nothing to cancel. The 5 days are simply yours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                No credit card needed for access. We'll set you up on Day 1.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceBonusSection;
