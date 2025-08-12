import CTA from "./_components/CTA";
import FeatureSection from "./_components/FeatureSection";
import MovieSection from "./_components/MovieSection";
import PlanSection from "./_components/PlanSection";
import FAQSection from "./_components/FAQSection";
import TopKVSection from "./_components/TopKVSection";

export default function Home() {
  return (
    <>
      <TopKVSection />
      <MovieSection />
      <FeatureSection />
      <CTA />
      <PlanSection />
      <FAQSection />
      <CTA />
    </>
  );
}
