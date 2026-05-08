import HeroSection from "@/components/HeroSection";
import SalesBridgeSection from "@/components/SalesBridgeSection";
import ValueStackPremiumSection from "@/components/ValueStackPremiumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <ValueStackPremiumSection />
      <FinalCtaSection />

      <FloatingCta />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
