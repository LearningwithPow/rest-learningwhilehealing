import { Info } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BeforeYouJoinSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
            Before You Join REST Reset
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-left space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 min-w-[2.75rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <Info className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground pt-2">
                REST Reset is designed for those who have already begun their inner clarity work.
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              To join, you must have completed one of the following:
            </p>

            <ul className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-2 pl-2">
              <li>• <span className="font-semibold text-foreground">Declutter to Clarity</span> (group session), or</li>
              <li>• At least one <span className="font-semibold text-foreground">1:1 CBT Coaching Session</span></li>
            </ul>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              This ensures every participant enters with the same level of awareness, allowing for deeper and more meaningful transformation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeYouJoinSection;
