import restFrameworkImage from "@/assets/rest-framework.png";
import ScrollReveal from "@/components/ScrollReveal";

const RestFrameworkSection = () => {
  return (
    <section className="section-calm bg-card">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-center">
            The REST Framework
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-center font-normal">
            REST is a gentle, step-by-step process that helps you move from overwhelm 
            toward clarity, beginning with safety and ending with compassion.
          </p>
        </ScrollReveal>

        {/* REST Framework Image */}
        <ScrollReveal delay={0.2} direction="none">
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 via-muted/20 to-primary/20 rounded-3xl blur-3xl" />
            <img
              src={restFrameworkImage}
              alt="The REST Framework: Regulate - Calm the nervous system first. Explore - Identify the clutters inside. Separate - Sort and declutter the mind. Talk to Yourself as a Coach - Respond with grace and compassion."
              className="relative w-full rounded-2xl shadow-soft"
            />
          </div>
        </ScrollReveal>

        {/* Framework detailed breakdown */}
        <div className="space-y-10 max-w-3xl mx-auto">
          {/* R - Regulate */}
          <ScrollReveal delay={0.3}>
            <div className="rest-card-r p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-semibold flex-shrink-0">R</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Regulate</h3>
                  <p className="opacity-90 leading-relaxed">
                    Calm the nervous system first, so the body feels safe enough to reflect.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* E - Explore */}
          <ScrollReveal delay={0.4}>
            <div className="rest-card-e p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-semibold flex-shrink-0">E</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Explore</h3>
                  <p className="opacity-90 leading-relaxed">
                    Gently identify the thoughts, emotions, and inner clutter present.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* S - Separate */}
          <ScrollReveal delay={0.5}>
            <div className="rest-card-s p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-semibold flex-shrink-0 min-w-[2rem]">S</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Separate</h3>
                  <p className="opacity-90 leading-relaxed mb-4">
                    Sort what's inside with wisdom and care:
                  </p>
                  <ul className="space-y-2.5 opacity-90">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">What is life-giving</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">What can be released</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">What may be shared when ready</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">What needs time, not pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">And what may be renewed rather than thrown away</span>
                    </li>
                  </ul>
                  <p className="opacity-90 mt-4 italic leading-relaxed">
                    Not everything needs to be removed.<br />
                    Some things are simply waiting to be renewed.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* T - Talk to Yourself */}
          <ScrollReveal delay={0.6}>
            <div className="rest-card-t p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-semibold flex-shrink-0">T</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Talk to Yourself as a Coach</h3>
                  <p className="opacity-90 leading-relaxed mb-2">
                    Learn to respond with truth and compassion instead of criticism.
                  </p>
                  <p className="opacity-90 italic">
                    This is where self-acceptance begins.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Closing line */}
        <ScrollReveal delay={0.7}>
          <div className="mt-16 text-center">
            <p className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
              REST creates space.<br />
              Transformation begins when the heart is ready.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RestFrameworkSection;
