import zoomImage from "@/assets/zoom-coaching.jpg";
import { Video, Users, Clock, Calendar, Heart, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HowItWorksSection = () => {
  const details = [
    { icon: Calendar, text: "4-day guided experience" },
    { icon: Clock, text: "90 minutes per session" },
    { icon: Video, text: "Live via Zoom" },
    { icon: Users, text: "Small group only" },
    { icon: Heart, text: "Guided reflection and optional sharing" },
  ];

  return (
    <section className="section-calm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
                How It Works
              </h2>
            </ScrollReveal>

            {/* Features */}
            <div className="flex flex-col gap-5 mb-10">
              {details.map((item, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                  <div className="flex items-start gap-4 text-foreground">
                    <div className="w-11 h-11 min-w-[2.75rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span className="text-lg md:text-xl leading-relaxed pt-2">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Investment */}
            <ScrollReveal delay={0.6}>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg md:text-xl font-semibold text-foreground">Investment</span>
                </div>
                <p className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">₱1,499</p>
                <p className="text-base md:text-lg text-muted-foreground">
                  Early bird: <span className="font-semibold text-foreground">₱999</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 via-muted/30 to-primary/20 rounded-3xl blur-2xl" />
              <img
                src={zoomImage}
                alt="Warm and intimate small group coaching session on video call"
                className="relative w-full max-w-md rounded-2xl shadow-soft"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
