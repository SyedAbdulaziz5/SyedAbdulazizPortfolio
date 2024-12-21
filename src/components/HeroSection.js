import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-layout">
      <section className="main-layout bg-white dark:bg-gray-900 h-screen">
        <div className="px-4 mx-auto max-w-full text-center py-52 lg:py-64 lg:px-8">
          <h1
            href="#"
            className="inline-flex justify-between items-center py-2 px-4 mb-7 text-sm hover:bg-gradient-to-bl hover:scale-105 transition-all duration-300  text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full "
            role="alert"
          >
            <FaCode className="mr-2 w-5 h-5" />
            <span className="text-sm text tracking-tight font-medium">
              "Exploring the Future of Web Development!"
            </span>
            <FaCode className="ml-2 w-5 h-5" />
          </h1>
          <h1 className="mb-4 text-5xl font-roboto font-bold tracking-wide leading-none text-gray-900 md:text-7xl lg:text-[9vw] dark:text-white">
            SYED ABDULAZIZ
          </h1>
          <motion.p
            className="mb-8 text text-sm font-medium tracking-wide uppercase text-gray-500 md:text-xl lg:text-3xl sm:px-16 xl:px-48 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Software Engineer, Front end & App Developer.
          </motion.p>

          {/* Animated <div> */}
          <motion.div
            className="px-4 mx-auto lg:pt-20 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <button
              onClick={() => handleScrollTo("expertise")}
              className="button border-[3px] border-[#752DBD] p-2 py-5 rounded-full"
            >
              <FaArrowDown className="hover-icon text-white" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
