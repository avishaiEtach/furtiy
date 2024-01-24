import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { AboutUsIntro } from "./components/AboutUsIntro";
import "./AboutUs.scss";
import { WhatWeProvide } from "./components/WhatWeProvide";
import { AboutUsInfo } from "./components/AboutUsInfo";
import { AboutUsOurTeam } from "./components/AboutUsOurTeam";

export function AboutUs() {
  return (
    <div className="flex column about-us">
      <PageHeader title={"About Us"} />
      <AboutUsIntro />
      <WhatWeProvide />
      <AboutUsInfo />
      <AboutUsOurTeam />
    </div>
  );
}
