import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import WebsiteOne from "../assets/images/Real-Estate.png";
import MovFlixProject from "../assets/images/MovFlixProject.png";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Data Visualization",
    "Dev",
    "Retro",
  ];

  const projects = [
    {
      id: 1,
      category: "Real Estate",
      imageUrl: WebsiteOne,
      alt: "Photo by Minh Pham",
      size: "wide",
    },
    {
      id: 2,
      category: "Data Visualization",
      imageUrl:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
      alt: "Photo by Magicle",
      size: "normal",
    },
    {
      id: 3,
      category: "Dev",
      imageUrl:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
      alt: "Photo by Martin Sanchez",
      size: "normal",
    },
    {
      id: 4,
      category: "Retro",
      imageUrl: MovFlixProject,
      alt: "Photo by Lorenzo Herrera",
      size: "wide",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleBreadcrumbClick = (category) => {
    setFilter(category);
  };

  return (
    <div className="bg-[#1A191D] h-auto py-6 sm:py-8 md:px-16 xl:px-60 lg:py-12">
      <div className="flex gap-4 flex-wrap">
        <h2 className="text-white text-lg font-semibold flex items-center justify-center">
          Filters by
        </h2>
        <nav className="flex py-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse flex-wrap">
            {categories.map((category, index) => (
              <li key={index}>
                <div className="flex gap-4 font-semibold items-center">
                  {index > 0 && (
                    <h1 className="w-3 h-3 text-[#BFBFC0] font-bold flex items-center justify-center">
                      /
                    </h1>
                  )}
                  <span className="text-lg text-[#BFBFC0]">
                    <button
                      onClick={() => handleBreadcrumbClick(category)}
                      className={`hover:text-blue-600 ${
                        filter === category ? "font-bold text-[#66D9ED]" : ""
                      }`}
                    >
                      {category}
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.a
              href="#"
              key={project.id}
              className={`group relative flex flex-col items-stretch overflow-hidden rounded-lg ${
                project.size === "wide"
                  ? "col-span-2 h-[400px] lg:col-span-2"
                  : "h-[400px]"
              }`}
              initial={{ opacity: 0, y: 50 }} // Start with hidden and moved down
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the div is in view
              transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src={project.imageUrl}
                  loading="lazy"
                  alt={project.alt}
                  className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col justify-between bg-[#201F23]">
                <h3 className="text-white lg:text-2xl font-bold">
                  {project.category}
                </h3>

                <div className="relative overflow-hidden h-8 mt-2">
                  <p className="text-sm md:text-base font-medium text-[#BFBFC0] absolute inset-0 transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
                    Web Development
                  </p>
                  <motion.a
                    href="/"
                    className="text-sm flex gap-2 md:text-base font-medium text-[#BFBFC0] hover:text-[#66D9ED] absolute inset-0 opacity-0 transform translate-y-full transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View Project
                    <FaArrowRight className="my-1 text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
