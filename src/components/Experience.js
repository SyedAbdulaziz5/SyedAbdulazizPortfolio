import React, { useRef, useState } from "react";
import { FaLocationDot, FaPlus, FaMinus } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import FloatingPhone from "../assets/images/hero-bg.jpg"; // Example image
import { motion } from "framer-motion";

// Example video background
import backgroundVideo from "../assets/videos/RotatingParticleGlobe.mp4"; // Your video path

const Experience = () => {
  const [openPanel, setOpenPanel] = useState(null);
  const videoRef = useRef(null); // Reference to the video element

  // Adjust the video playback rate (default is 1, so 0.5 will slow it down)
  const adjustVideoSpeed = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust the playback rate (0.5 is slower)
    }
  }; // State to track the currently opened panel

  const items = [
    {
      key: "1",
      label: "Software Engineer @ Saimon Global Ltd",
      location: "Mardan, Pakistan",
      url: "example.com",
      description:
        "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",
      skills: ["Javascript", "React", "NextJS", "Tailwind", "HTML", "CSS"],
      image: FloatingPhone,
      Duration: "2024 - Present",
    },
    {
      key: "2",
      label: "Web Developer @ influenceTHIS Canada",
      location: "Mardan, Pakistan",
      url: "example.com",
      description:
        "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",
      skills: ["Javascript", "React", "NextJS", "Tailwind", "HTML", "CSS"],
      image: FloatingPhone,
      Duration: "2023 - 2024",
    },
    {
      key: "3",
      label: "Top Rated Web Developer @ Upwork Inc.",
      location: "Mardan, Pakistan",
      url: "example.com",
      description:
        "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",
      skills: ["Javascript", "React", "NextJS", "Tailwind", "HTML", "CSS"],
      image: FloatingPhone,
      Duration: "2022 - 2023",
    },
  ];

  const handleToggle = (panelKey) => {
    setOpenPanel(openPanel === panelKey ? null : panelKey);
  };

  return (
    <motion.div
      id="experience"
      style={{
        background: `#1A191D`,
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 100%), 
          repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 100%)
        `,
        backgroundSize: "70px 70px",
      }}
      className="relative flex flex-col justify-center items-center min-h-screen bg-[#1A191D] px-4 sm:px-16 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <motion.h1
        className="text-4xl md:text-6xl pb-3 lg:text-6xl text-white font-semibold font-poppins lg:leading-tight mb-6 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span>Professional</motion.span>
        <br />
        <motion.span className="lg:pl-4">Experience</motion.span>
      </motion.h1>

      <div className="w-full max-w-4xl text-white z-10 relative">
        {items.map(
          ({
            key,
            label,
            location,
            url,
            description,
            skills,
            image,
            Duration,
          }) => (
            <div key={key} className="mb-2">
              <h2 id={`accordion-collapse-heading-${key}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-4 px-6 sm:px-8 font-bold text-lg rtl:text-right text-white rounded-md ${
                    openPanel === key ? "bg-[#740CDC]" : "bg-[#430D79]"
                  }`}
                  onClick={() => handleToggle(key)}
                  aria-expanded={openPanel === key}
                  aria-controls={`accordion-collapse-body-${key}`}
                >
                  <span>{label}</span>
                  <span className="flex items-center gap-10">
                    <span className="hidden md:block">{Duration}</span>
                    {openPanel === key ? (
                      <FaMinus className="w-3 h-3" />
                    ) : (
                      <FaPlus className="w-3 h-3" />
                    )}
                  </span>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${key}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden mt-2 rounded-md bg-[#241D41] ${
                  openPanel === key ? "max-h-[500px] py-4" : "max-h-0 py-0"
                }`}
                aria-labelledby={`accordion-collapse-heading-${key}`}
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="flex-1">
                      <div className="flex gap-3 items-center mb-4">
                        <FaLocationDot className="text-xl text-[#BB77FF]" />
                        <h1 className="font-semibold text-[#C8C6CF]">
                          {location}
                        </h1>
                        <FaExternalLinkSquareAlt className="text-xl text-[#BB77FF]" />
                        <h1 className="font-semibold text-[#C8C6CF]">{url}</h1>
                      </div>
                      <h1 className="font-semibold mb-4">{description}</h1>
                      <div className="flex py-4 gap-3 flex-wrap">
                        {skills.map((skill, index) => (
                          <button
                            key={index}
                            className="bg-[#2C3599] text-sm text-[#BBB7D9] font-bold py-2 px-4 rounded-full"
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 sm:order-first sm:mb-0 mb-6 sm:w-auto w-full flex justify-center">
                      <img
                        className="h-44 w-44 sm:h-36 sm:w-36 md:h-44 md:w-44"
                        src={image}
                        alt="Floating Phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
