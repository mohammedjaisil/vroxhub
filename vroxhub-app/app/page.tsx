import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import VideographySection from "@/components/VideographySection";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import MarqueeSection from "@/components/MarqueeSection";
import ExhibitionsList from "@/components/ExhibitionsList";
import AboutVisualSection from "@/components/AboutVisualSection";
import CapturingSection from "@/components/CapturingSection";
import AboutMeSection from "@/components/AboutMeSection";
import WorksSection from "@/components/WorksSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import SayHello from "@/components/SayHello";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MarqueeSection text="ABOUT . ABOUT . ABOUT" />
      <AboutVisualSection />

      {/* New Reference Sections */}
      <CapturingSection />
      <AboutMeSection />

      <FeatureSection />
      <VideographySection />

      <WorksSection />

      <MarqueeSection text="PORTFOLIO . PORTFOLIO . PORTFOLIO" />
      <Services />
      <ProjectsGrid />

      <ExhibitionsList />
      <TeamSection />

      <SayHello />
    </div>
  );
}
