import { Heart, BookHeart, Sparkles, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  { icon: Heart, label: "Created by Coach Pow" },
  { icon: BookHeart, label: "Christian Life Coach" },
  { icon: Sparkles, label: "CBT + Mindfulness Based Tools" },
  { icon: ShieldCheck, label: "Safe, Compassionate Guided Space" },
];

const TrustStripSection = () => {
  return (
    <section className="px-6 md:px-8 py-14 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustStripSection;