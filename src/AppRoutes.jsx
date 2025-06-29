import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Work from "./components/work/Work";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default AppRoutes;
