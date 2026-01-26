import restFrameworkImage from "@/assets/rest-framework.png";
import ScrollReveal from "@/components/ScrollReveal";

const RestFrameworkSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            The REST Framework
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            A gentle, step-by-step process to help you move from overwhelm to inner peace.
          </p>
        </ScrollReveal>

        {/* REST Framework Image */}
        <ScrollReveal delay={0.2} direction="none">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 via-muted/20 to-primary/20 rounded-3xl blur-3xl" />
            <img
              src={restFrameworkImage}
              alt="The REST Framework: Regulate - Calm the nervous system first. Explore - Identify the clutters inside. Separate - Sort and declutter the mind. Talk to Yourself as a Coach - Respond with grace and compassion."
              className="relative w-full rounded-2xl shadow-soft"
            />
          </div>
        </ScrollReveal>

        {/* Framework breakdown for accessibility and SEO */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.3}>
            <div className="rest-card-r flex-col text-center py-6">
              <span className="font-serif text-4xl font-semibold mb-2">R</span>
              <h3 className="font-semibold text-lg mb-1">Regulate</h3>
              <p className="text-sm opacity-90">Calm the nervous system first</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="rest-card-e flex-col text-center py-6">
              <span className="font-serif text-4xl font-semibold mb-2">E</span>
              <h3 className="font-semibold text-lg mb-1">Explore</h3>
              <p className="text-sm opacity-90">Identify the clutters inside</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <div className="rest-card-s flex-col text-center py-6">
              <span className="font-serif text-4xl font-semibold mb-2">S</span>
              <h3 className="font-semibold text-lg mb-1">Separate</h3>
              <p className="text-sm opacity-90">Sort and declutter the mind</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="rest-card-t flex-col text-center py-6">
              <span className="font-serif text-4xl font-semibold mb-2">T</span>
              <h3 className="font-semibold text-lg mb-1">Talk to Yourself</h3>
              <p className="text-sm opacity-90">Respond with grace & compassion</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RestFrameworkSection;
