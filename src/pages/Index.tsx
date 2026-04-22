import HeroSection from "@/components/HeroSection";
import SalesBridgeSection from "@/components/SalesBridgeSection";
import ValueStackSection from "@/components/ValueStackSection";
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
      <ValueStackSection />
      <PainResonanceSection />
      <FromAwarenessSection />
      <TestimonialsSection />
      <WalkAwaySection />
      <FinalCtaSection />

      <FloatingCta />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
