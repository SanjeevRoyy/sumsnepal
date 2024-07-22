import React from "react";
import Testimonials from "../components/Testimonials";
import Brand from "../components/Brand";
import Teams from "../components/Teams";
import { useMediaQuery } from "@mantine/hooks";
import Banner from "../components/Banner";
import WhatWeDo from "../components/WhatWeDo";
import Academia from "../components/Academia";
import DigitalTools from "../components/DigitalTools";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* <HeroSection /> */}

      <Banner />

      <WhatWeDo />

      <Academia />

      <DigitalTools />

      <Testimonials />

      <Brand />

      <Teams />
    </>
  );
};

export default Home;
