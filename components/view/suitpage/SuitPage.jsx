import React from "react";
import WhatYouGetSection from "./components/WhatYouGetSection";
import GetStartedSection from "./components/GetStartedSection";
import DoesItReallyWorkSection from "./components/DoesItReallyWorkSection";
import HeroProductSection from "./components/HeroProductSection";
import WorkflowSection from "./components/WorkflowSection";
import SuiteAdvantage from "./components/SuiteAdvantage";

const SuitPage = () => {
  return (
    <>
      <HeroProductSection />
      <WorkflowSection />
      <SuiteAdvantage/>
      <DoesItReallyWorkSection />
      <WhatYouGetSection />
      <GetStartedSection />
    </>
  );
};

export default SuitPage;
