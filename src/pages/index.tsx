import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import ExpertiseSection from "../components/ExpertiseSection";
import CTAFirstModel from "../components/CTAFirstModel";
import FaqSection from "../components/FaqSection";

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
    </>
  );
}
