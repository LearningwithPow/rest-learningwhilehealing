import HeroSection from "@/components/HeroSection";
import SalesBridgeSection from "@/components/SalesBridgeSection";
import IntroSection from "@/components/IntroSection";
import ValueStackSection from "@/components/ValueStackSection";
import TrustStripSection from "@/components/TrustStripSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PainResonanceSection from "@/components/PainResonanceSection";
import FromAwarenessSection from "@/components/FromAwarenessSection";
import DetailsPricingSection from "@/components/DetailsPricingSection";
import WalkAwaySection from "@/components/WalkAwaySection";
import WhatItIsSection from "@/components/WhatItIsSection";
import RestFrameworkSection from "@/components/RestFrameworkSection";

import BeforeYouJoinSection from "@/components/BeforeYouJoinSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FloatingCta from "@/components/FloatingCta";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustStripSection />
      <IntroSection />
      <PainResonanceSection />
      <ValueStackSection />
      <TestimonialsSection />
      <FromAwarenessSection />
      <DetailsPricingSection />
      <WalkAwaySection />
      <WhatItIsSection />
      <RestFrameworkSection />
      
      <BeforeYouJoinSection />
      <FinalCtaSection />

      <FloatingCta />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
