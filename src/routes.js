import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SkillsSection from "./components/Expertise";
import MyWork from "./components/MyWork";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/expertise" element={<SkillsSection />} />
        <Route path="/work" element={<MyWork />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
