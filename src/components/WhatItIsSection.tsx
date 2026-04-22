import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const qualities = ["Gentle", "Practical", "Safe", "Supportive"];

const WhatItIsSection = () => {
  return (
    <section className="section-calm">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-10 leading-tight">
            What REST Reset Is
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-left">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              A guided small-group coaching experience designed to help you calm
              stress, organize emotional clutter, and feel like yourself again.
            </p>

            <ul className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {qualities.map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <div className="w-9 h-9 min-w-[2.25rem] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatItIsSection;
