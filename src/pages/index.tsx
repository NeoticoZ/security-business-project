import { useEffect, useState } from "react";
import CTAFirstModel from "../components/CTAFirstModel";
import ExpertiseSection from "../components/ExpertiseSection";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
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
