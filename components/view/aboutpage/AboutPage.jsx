import React from "react";
import LeadershipTeam from "./components/LeadershipTeam";
import BoardOfDirectors from "./components/BoardOfDirectors";
import ProductSection from "./components/ProductSection";
import Image from "next/image";

import { PlayCircle } from "lucide-react";
import { TimelineSection } from "./components/timeline-section";
import AboutHeroSection from "./components/AboutHeroSection";
import ChallengeSection from "./components/ChallengeSection";
import AsSeenOnSection from "./components/AsSeenOnSection";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection/>
      <TimelineSection />
     <ChallengeSection/>
      <ProductSection />
      <LeadershipTeam />
      <BoardOfDirectors />
      <AsSeenOnSection/>
    </div>
  );
};

export default AboutPage;
