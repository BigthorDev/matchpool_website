import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhatIsAPool } from "../components/WhatIsAPool";
import { HowItWorks } from "../components/HowItWorks";
import { PoolTypesOverview } from "../components/PoolTypesOverview";
import { SocialCompetition } from "../components/SocialCompetition";
import { FAQs } from "../components/FAQs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsAPool />
      <HowItWorks />
      <PoolTypesOverview />
      <SocialCompetition />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}