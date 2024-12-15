import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SkillsSection from "./components/Expertise";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/expertise" element={<SkillsSection />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
