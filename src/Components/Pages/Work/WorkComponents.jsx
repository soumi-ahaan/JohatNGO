import React from "react";
import RecentWork from "../Home/RecentWork";
import CallToAction from "../Home/CallToAction";
import Donation from "../Home/Donation";
import WhatWeDo from "./WhatWeDo";
import WorkBanner from "./WorkBanner";
import VolunteerDonateSection from "./VolunteerDonateSection";
import CounterSection from "./CounterSection";

const WorkComponents = () => {
  return (
    <div>
      <WorkBanner/>
      <WhatWeDo />
      <VolunteerDonateSection/>
      <RecentWork />
      <CounterSection/>
      <CallToAction />
      <Donation />
    </div>
  );
};

export default WorkComponents;
