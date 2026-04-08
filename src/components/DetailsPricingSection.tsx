import { Video, Users, Clock, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

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

        {/* Pricing card */}
        <ScrollReveal delay={0.25}>
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Investment</span>
            </div>

            <div className="space-y-2 mb-2">
              <p className="text-2xl md:text-3xl font-serif font-medium text-foreground">
                Early Bird: <span className="text-primary">₱999</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Regular: ₱1,499
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Early bird until April 22
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.35}>
          <a href="https://your-xendit-link-here" target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="calm">
              Join REST Reset
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Secure your spot. Small group only.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DetailsPricingSection;
