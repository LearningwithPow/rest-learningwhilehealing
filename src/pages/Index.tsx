import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ForYouIfSection from "@/components/ForYouIfSection";
import FromAwarenessSection from "@/components/FromAwarenessSection";
import DetailsPricingSection from "@/components/DetailsPricingSection";
import WalkAwaySection from "@/components/WalkAwaySection";
import WhatItIsSection from "@/components/WhatItIsSection";
import RestFrameworkSection from "@/components/RestFrameworkSection";

import BeforeYouJoinSection from "@/components/BeforeYouJoinSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ForYouIfSection />
      <FromAwarenessSection />
      <DetailsPricingSection />
      <WalkAwaySection />
      <WhatItIsSection />
      <RestFrameworkSection />
      
      <BeforeYouJoinSection />
      <FinalCtaSection />
    </main>
  );
};

export default Index;
