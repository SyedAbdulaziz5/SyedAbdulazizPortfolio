import React from "react";
import HeroImg from "../assets/images/hero-bg.jpg";
import { FaArrowRight, FaPlay, FaArrowCircleRight } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";
import CircleWidget from "../components/CircleWidget";
import SkillsSection from "../components/Expertise";
import SkillsComponent from "../components/Expertise";

const HeroSection = () => {
  return (
    <div className="main-layout">
      <section className="main-layout bg-white dark:bg-gray-900 h-screen">
        <div className="py-8 px-4 mx-auto max-w-full text-center sm:py-52 lg:py-72 lg:px-8">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="text-sm font-medium">
              Flowbite is out! See what's new
            </span>
            <FaArrowRight className="ml-2 w-5 h-5" />
          </a>
          <h1 className="mb-4 text-4xl font-roboto font-bold tracking-wide leading-none text-gray-900 md:text-5xl lg:text-[9vw] dark:text-white">
            SYED ABDULAZIZ
          </h1>
          <p className="mb-8 text-2xl font-roboto font-medium tracking-wide uppercase text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-white">
            Software Engineer, Front end & App Developer.
          </p>
          <div className="px-4 mx-auto lg:pt-20 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <button className="border-[3px] border-[#752DBD] p-2 py-5 rounded-full transition-transform duration-300 hover:translate-y-[-4px]">
              <FaArrowDown className="text-white" />
            </button>
          </div>
        </div>
      </section>
      <SkillsComponent />
    </div>
  );
};

export default HeroSection;
