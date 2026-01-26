import untanglingImage from "@/assets/untangling-thoughts.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const MentalSpaceSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-muted/30 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={untanglingImage}
                alt="Abstract visualization of tangled thoughts becoming calm and organized"
                className="relative w-full max-w-md rounded-2xl shadow-soft"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
                Create space for what matters
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                When life feels tangled and heavy, it's hard to know where to begin. 
                REST Reset helps you gently sort through the mental and emotional clutter—not by pushing harder, but by making room for clarity.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, we create a safe container where you can name what's weighing on you, 
                separate what's yours from what isn't, and rediscover the calm that's been waiting underneath.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalSpaceSection;
