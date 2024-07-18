import React from "react";
import Testimonials from "../components/Testimonials";
import Brand from "../components/Brand";
import Teams from "../components/Teams";
import { useMediaQuery } from "@mantine/hooks";
import Banner from "../components/Banner";
import WhatWeDo from "../components/WhatWeDo";
import Academia from "../components/Academia";
import DigitalTools from "../components/DigitalTools";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
    {/* <Navbar /> */}
      <Banner />

      <WhatWeDo />

      <Academia />

      <DigitalTools />

      <Testimonials />

      <Brand />

      <Teams />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
