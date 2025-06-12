import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Work from "./components/work/Work";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default AppRoutes;
