import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/Home";
import ItServices from "../pages/itService/ItServices";
import Industries from "../pages/industries/Industries";
import Package from "../pages/package/Package";
import ScrollToTop from "./ScroolTop";
import Privacy from "../pages/privacy/Privacy";

const Routing = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/itservices" element={<ItServices />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/package" element={<Package />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
};

export default Routing;
