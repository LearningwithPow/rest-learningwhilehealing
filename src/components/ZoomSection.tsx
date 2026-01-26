import zoomImage from "@/assets/zoom-coaching.jpg";
import { Video, Users, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ZoomSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
                How it works
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                REST Reset is a live, guided group experience held online.
              </p>
            </ScrollReveal>

            {/* Features */}
            <div className="flex flex-col gap-4">
              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-lg">Live via Zoom</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-lg">Small group only</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-lg">Guided sharing for safety</span>
                </div>
              </ScrollReveal>
            </div>
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

export default ZoomSection;
