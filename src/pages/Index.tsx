import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ForYouIfSection from "@/components/ForYouIfSection";
import WhatItIsSection from "@/components/WhatItIsSection";
import RestFrameworkSection from "@/components/RestFrameworkSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ForYouIfSection />
      <WhatItIsSection />
      <RestFrameworkSection />
      <HowItWorksSection />
      <FinalCtaSection />
    </main>
  );
};

export default Index;
