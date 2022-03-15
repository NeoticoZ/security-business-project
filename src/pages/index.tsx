import CasesSection from "../components/CasesSection";
import CTAFirstModel from "../components/CTAFirstModel";
import ExpertiseSection from "../components/ExpertiseSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar active="home" />
      <Hero />
      <FeaturesSection />
      <ExpertiseSection />
      <CTAFirstModel />
      <FaqSection />
      <CasesSection />
    </>
  );
}
