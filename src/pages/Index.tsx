import StickyNav, { SECTIONS } from "@/components/case-study/StickyNav";
import HeroSection from "@/components/case-study/HeroSection";
import ContextSection from "@/components/case-study/ContextSection";
import ProblemSection from "@/components/case-study/ProblemSection";
import ResearchSection from "@/components/case-study/ResearchSection";
import JourneySection from "@/components/case-study/JourneySection";
import InsightsSection from "@/components/case-study/InsightsSection";
import RiceSection from "@/components/case-study/RiceSection";
import BeforeSection from "@/components/case-study/BeforeSection";
import FlowSection from "@/components/case-study/FlowSection";
import AfterSection from "@/components/case-study/AfterSection";
import DecisionsSection from "@/components/case-study/DecisionsSection";
import ImpactSection from "@/components/case-study/ImpactSection";
import LearningsSection from "@/components/case-study/LearningsSection";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sectionIds = SECTIONS.map((s) => s.id);

const Index = () => {
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-background">
      <StickyNav activeId={activeId} />
      <HeroSection />
      <ContextSection />
      <ProblemSection />
      <ResearchSection />
      <JourneySection />
      <InsightsSection />
      <RiceSection />
      <BeforeSection />
      <FlowSection />
      <AfterSection />
      <DecisionsSection />
      <ImpactSection />
      <LearningsSection />
    </div>
  );
};

export default Index;
