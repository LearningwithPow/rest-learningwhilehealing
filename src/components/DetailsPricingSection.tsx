import { Video, Users, Clock, Calendar, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import zoomSessionImg from "@/assets/zoom-coaching-session.jpg";

const DetailsPricingSection = () => {
  const details = [
    { icon: Video, text: "Live via Zoom" },
    { icon: Users, text: "Small group only" },
    { icon: Clock, text: "2 hours per session" },
    { icon: Calendar, text: "Tuesday to Thursday, 7:30 – 9:30 PM" },
  ];

  return (
    <section className="section-calm bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 leading-tight">
            REST Reset — April 28–30, 2026
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            3-day guided group coaching experience
          </p>
        </ScrollReveal>

        {/* Details grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
            {details.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-accent-foreground" />
                </div>
                <span className="text-base md:text-lg text-foreground">{item.text}</span>
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
        <ScrollReveal delay={0.22}>
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft max-w-md mx-auto mb-8 text-left">
            <p className="font-serif text-xl md:text-2xl font-medium text-foreground mb-5 text-center">
              Your <span className="text-primary">₱999</span> Includes:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "3 Live Coaching Sessions",
                "Guided REST Framework",
                "Reflection Workbook",
                "Practical Reset Tools",
                "Supportive Small Group Experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg text-foreground">
                  <span className="text-primary/80 flex-shrink-0 mt-0.5">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Investment</span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-2xl md:text-3xl font-serif font-medium text-foreground">
                Early Bird: <span className="text-primary">₱999</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Regular: ₱1,499
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Early bird until April 24
              </p>
            </div>

            <div className="bg-[hsl(270,30%,95%)] rounded-xl px-4 py-3 mt-4">
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
              Reserve Your Spot
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Secure your spot while early bird is available.
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
