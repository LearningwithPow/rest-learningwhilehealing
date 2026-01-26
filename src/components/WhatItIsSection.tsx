import ScrollReveal from "@/components/ScrollReveal";

const WhatItIsSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 leading-tight text-center">
            What REST Reset Is — And Is Not
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* What It Is */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What It Is
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                REST Reset is a live, guided inner decluttering experience held online. 
                You will be gently guided to notice, name, and sort emotional and mental 
                clutter using the REST framework — with reflection, structure, and 
                compassionate facilitation.
              </p>
            </div>
          </ScrollReveal>
          
          {/* What It Is Not */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                What It Is Not
              </h3>
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                <p>
                  This is not therapy.<br />
                  Not a lecture.<br />
                  Not a space where you are told what to feel or how to heal.
                </p>
                <p>
                  It is an experience designed to help you create space — not force change.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatItIsSection;
