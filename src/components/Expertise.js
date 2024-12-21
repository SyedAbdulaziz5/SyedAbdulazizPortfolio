import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const expertiseData = [
  {
    icon: <HiOutlineDesktopComputer className="text-5xl md:text-7xl" />,
    title: "Software Development",
    description:
      "Experienced in both functional and OOP, JavaScript, TypeScript, Python.",
  },
  {
    icon: <FaReact className="text-5xl md:text-7xl" />,
    title: "Frontend Development",
    description:
      "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl md:text-7xl" />,
    title: "UI/UX",
    description:
      "Skilled in creating responsive and modern designs using Tailwind's utility-first approach.",
  },
];

const Expertise = () => {
  return (
    <div id="expertise" className="bg-[#1A191D] text-white px-4 md:px-8">
      {/* Header with animation */}
      <motion.h1
        className="text-4xl md:text-7xl font-semibold text-center font-poppins pt-16 md:pt-24 pb-8 md:pb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Expertise
      </motion.h1>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-5">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-[#A3A3A3] py-6 md:py-10 px-4 md:px-8 w-full hover:border-white transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }} // This makes sure it triggers only once when in view
            >
              <div className="title gap-3 flex items-center">
                {item.icon}
                <h1 className="text-2xl md:text-3xl font-semibold relative">
                  <span className="fancy-underline">
                    {item.title.split(" ")[0]}
                  </span>
                  <br /> {item.title.split(" ")[1]}
                </h1>
              </div>
              <div className="text">
                <div className="flex">
                  <span className="flex flex-col">
                    <h3 className="text-[#5F5E61] flex justify-center translate-y-2 font-semibold mb-4 text-sm md:text-base">
                      &lt;h3&gt;
                    </h3>
                    <div className="w-[2px] md:w-[3px] rounded-full h-24 md:h-32 bg-[#5F5E61] m-auto"></div>
                    <h3 className="text-[#5F5E61] -translate-y-2 font-semibold mt-4 text-sm md:text-base">
                      &lt;/h3&gt;
                    </h3>
                  </span>
                  <p className="text pt-8 text-base md:text-lg w-full md:w-72">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="hidden sm:block lg:hidden py-6 md:py-5 px-4 md:px-8 w-full">
            <div className="title gap-4 md:gap-6 flex items-center">
              <div className="w-5 h-40 bg-[#BB77FF]" />
              <p className="text-3xl font-poppins font-bold">
                Sometimes the best way to solve a problem is to help others.
              </p>
            </div>
            <p className="text-base">
              - Uncle Iroh, 'Avatar: The Last Airbender'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
