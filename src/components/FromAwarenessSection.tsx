import { Brain, FolderOpen, Shield, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FromAwarenessSection = () => {
  const points = [
    { icon: Brain, text: "Regulate your nervous system so clarity becomes possible" },
    { icon: FolderOpen, text: "Gently untangle emotional and mental clutter with guidance" },
    { icon: Shield, text: "Reflect in a safe, grounded environment" },
    { icon: Users, text: "Experience how group coaching accelerates growth" },
  ];

  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            From Awareness to Real Change
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            REST Reset is a structured 3-day group coaching experience designed to help you move 
            beyond understanding yourself — and begin experiencing real inner order and clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-foreground font-medium mb-5 text-left max-w-xl mx-auto">
            Inside this space, you will:
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-5 text-left max-w-xl mx-auto mb-10">
          {points.map((item, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.08}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 min-w-[2.75rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-lg md:text-xl text-foreground leading-relaxed pt-2">
                  {item.text}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
            This is where insight becomes integration.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <p className="text-sm text-muted-foreground">
            Prerequisite: Completion of Declutter to Clarity (live session) or at least one 1:1 CBT Coaching Session is required before joining REST Reset.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FromAwarenessSection;
