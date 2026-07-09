import HeroSection from "@/components/HeroSection";
import SalesBridgeSection from "@/components/SalesBridgeSection";
import ValueStackPremiumSection from "@/components/ValueStackPremiumSection";
import SpaceBonusSection from "@/components/SpaceBonusSection";
import SpaceAppSection from "@/components/SpaceAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JourneySection from "@/components/JourneySection";
import PainResonanceSection from "@/components/PainResonanceSection";
import FromAwarenessSection from "@/components/FromAwarenessSection";
import WalkAwaySection from "@/components/WalkAwaySection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FloatingCta from "@/components/FloatingCta";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SalesBridgeSection />
      <PainResonanceSection />
      <FromAwarenessSection />
      <TestimonialsSection />
      <WalkAwaySection />
      <SpaceBonusSection />
      <JourneySection />
      <div id="pricing">
        <ValueStackPremiumSection />
      </div>
      <SpaceAppSection />
      <FinalCtaSection />

      <FloatingCta />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
