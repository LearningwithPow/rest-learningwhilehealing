import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BeforeYouJoinSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
            Designed for Ready Participants
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-center">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-5">
              REST Reset is intentionally for those who completed{" "}
              <span className="font-semibold text-foreground">Declutter to Clarity</span>{" "}
              or have worked with{" "}
              <span className="font-semibold text-foreground">Coach Pow</span> privately.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              This ensures everyone enters ready for deeper growth and meaningful transformation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeYouJoinSection;
