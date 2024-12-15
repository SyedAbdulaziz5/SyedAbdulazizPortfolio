import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const expertiseData = [
  {
    icon: <HiOutlineDesktopComputer className="text-7xl" />,
    title: "Software Development",
    description:
      "Experienced in both functional and OOP, JavaScript, TypeScript, Python.",
  },
  {
    icon: <FaReact className="text-7xl" />,
    title: "Frontend Development",
    description:
      "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
  },
  {
    icon: <RiTailwindCssFill className="text-7xl" />,
    title: "Mobile Development",
    description:
      "Skilled in creating responsive and modern designs using Tailwind's utility-first approach.",
  },
];

const Expertise = () => {
  return (
    <div id="expertise" className="bg-[#1A191D] h-full text-white">
      <h1 className="text-7xl font-semibold flex items-center justify-center font-poppins pt-24 pb-10">
        My Expertise
      </h1>
      <div className="container flex items-center justify-center m-auto">
        {expertiseData.map((item, index) => (
          <div key={index} className="border-2 border-[#A3A3A3] py-10 px-8">
            <div className="title gap-6 flex">
              {item.icon}
              <h1 className="text-3xl font-semibold relative">
                <span className="fancy-underline">
                  {item.title.split(" ")[0]}
                </span>
                <br /> {item.title.split(" ")[1]}
              </h1>
            </div>
            <div className="text">
              <div className="flex">
                <span className="flex flex-col">
                  <h3 className="text-[#5F5E61] flex justify-center translate-y-2 font-semibold mb-4">
                    &lt;h3&gt;
                  </h3>
                  <div className="w-[3px] rounded-full h-32 bg-[#5F5E61] m-auto"></div>
                  <h3 className="text-[#5F5E61] -translate-y-2 font-semibold mt-4">
                    &lt;/h3&gt;
                  </h3>
                </span>
                <p className="font-roboto pt-8 tracking-widest text-[1.2rem] w-72">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
