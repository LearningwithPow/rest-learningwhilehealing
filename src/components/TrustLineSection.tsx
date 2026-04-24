import ScrollReveal from "@/components/ScrollReveal";
import { Heart } from "lucide-react";

const TrustLineSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,20%,97%)] to-background">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-5">
            <Heart className="w-5 h-5 text-primary" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed italic">
            Women are choosing healing, rest, and clarity.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
            Thank you for trusting Learning While Healing.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustLineSection;