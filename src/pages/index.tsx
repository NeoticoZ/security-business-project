import CasesSection from "../components/CasesSection";
import CTASection from "../components/CTASection";
import ExpertiseSection from "../components/ExpertiseSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NumbersSection from "../components/NumbersSection";
import SponsorsSection from "../components/SponsorsSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar active="home" />
      <Hero />
      <FeaturesSection />
      <ExpertiseSection />
      <CTASection />
      <FaqSection />
      <CasesSection />
      <SponsorsSection />
      <NumbersSection />
      <TestimonialsSection />
    </>
  );
}
