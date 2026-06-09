import { Facebook, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FB_URL = "https://www.facebook.com/LearningWhileHealing/";

const RegistrationClosedSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,20%,97%)] to-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="bg-card rounded-2xl shadow-soft border border-primary/10 p-6 sm:p-10 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 mb-5">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground/80 tracking-wide">A Gentle Update</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
              REST Reset Registration Is Now Closed
            </h2>

            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 max-w-xl mx-auto text-left sm:text-center">
              <p>Thank you for your interest in REST Reset.</p>
              <p>
                Our June 2026 group has already begun, and registration for this batch is now closed.
              </p>
              <p>
                If you would like to be informed when the next REST Reset group opens, we would love to stay connected with you.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 bg-primary/5 rounded-2xl p-5 sm:p-7 text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2 text-center">
                Follow Learning While Healing
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 text-center">
                Join our Facebook community for encouragement, mental wellness resources, upcoming workshops, and future coaching opportunities.
              </p>

              <p className="text-sm sm:text-base text-foreground/80 font-medium mb-3">
                Be the first to know about:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Future REST Reset groups",
                  "Free webinars and workshops",
                  "Christian mindfulness resources",
                  "Emotional wellness tools and coaching opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                    <span className="text-primary/80 flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <a href={FB_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="calm" size="calm" className="text-base">
                    <Facebook className="w-5 h-5" />
                    Follow Us on Facebook
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mt-8 leading-relaxed">
              Thank you for visiting Learning While Healing.
              <br />
              We look forward to welcoming you in a future batch. 💜
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70 italic mt-3">
              — Coach Pow & Learning While Healing
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationClosedSection;