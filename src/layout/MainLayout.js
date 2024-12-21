import React from "react";
import HeroSection from "../components/HeroSection";
import Expertise from "../components/Expertise";
import MyWork from "../components/MyWork";
import ProjectsSection from "../components/ProjectsSection";
import Experience from "../components/Experience";
import TestimonialsAndContact from "../components/TestimonialsAndContact";

const MainLayout = () => {
  return (
    <div>
      <HeroSection />
      <Expertise />
      <MyWork />
      <ProjectsSection />
      <Experience />
      <TestimonialsAndContact />
    </div>
  );
};

export default MainLayout;
