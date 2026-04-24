import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PainResonanceSection from "@/components/PainResonanceSection";
import FromAwarenessSection from "@/components/FromAwarenessSection";
import WalkAwaySection from "@/components/WalkAwaySection";
import FinalCtaSection from "@/components/FinalCtaSection";
import TrustLineSection from "@/components/TrustLineSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainResonanceSection />
      <FromAwarenessSection />
      <TestimonialsSection />
      <WalkAwaySection />
      <TrustLineSection />
      <FinalCtaSection />
    </main>
  );
};

export default Index;
