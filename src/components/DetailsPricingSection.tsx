import { Video, Users, Clock, Calendar, Sparkles, ShieldCheck, Flame, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import zoomSessionImg from "@/assets/zoom-coaching-session.jpg";

const DetailsPricingSection = () => {
  const details = [
    { icon: Video, text: "Live via Zoom", subtext: "Private, intimate sessions" },
    { icon: Users, text: "Small group only", subtext: "Limited to ensure safety" },
    { icon: Clock, text: "2 hours per session", subtext: "Deep, unhurried work" },
    { icon: Calendar, text: "April 28–30, 2026", subtext: "Tue–Thu, 7:30–9:30 PM" },
  ];

  return (
    <section className="section-calm bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">
            Limited Time Investment
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Your Complete Reset Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Everything you need to move from mental exhaustion to inner clarity.
          </p>
        </ScrollReveal>

        {/* Details grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {details.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-left bg-background rounded-xl p-4">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-base md:text-lg text-foreground font-medium block">{item.text}</span>
                  <span className="text-sm text-muted-foreground">{item.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Zoom session image */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-lg mx-auto mb-10 rounded-2xl overflow-hidden shadow-soft">
            <img
              src={zoomSessionImg}
              alt="A calm, intimate group coaching session on Zoom"
              loading="lazy"
              width={1024}
              height={576}
              className="w-full h-auto opacity-90"
            />
          </div>
        </ScrollReveal>

        {/* Pricing Card */}
        <ScrollReveal delay={0.25}>
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft max-w-md mx-auto mb-8 border border-primary/10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Your Investment</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-sm text-muted-foreground">Early Bird:</span>
                <span className="font-serif text-4xl md:text-5xl font-semibold text-primary">₱999</span>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground">
                Less than ₱333 per guided evening
              </p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-base">Regular Rate:</span>
                <span className="text-lg line-through">₱1,499</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80 tracking-wide">
                Early bird ending soon
              </span>
            </div>

            <div className="bg-[hsl(270,30%,95%)] rounded-xl px-4 py-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Timer className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Limited Availability</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Small group only. Registration closes once slots are full.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.35}>
          <a href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird" target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm">
              Reserve My Spot
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Starts next week • Limited seats available
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/70">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs">
              Secure checkout via Xendit. GCash, Maya, QRPH, and debit card payments accepted.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DetailsPricingSection;