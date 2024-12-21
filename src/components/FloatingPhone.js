import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import floatingPhoneImg from "../assets/images/MovFlix.png";
import { NavLink } from "react-router-dom";
import floatingImg from "../assets/images/Capture-removebg-preview.png";

const Example = () => {
  return (
    <section className="bg-[#1A191D] px-5 flex justify-center items-center">
      <div className="flex flex-row justify-end items-center">
        <FloatingPhone />
        {/* <div className="flex flex-col items-center justify-center text-center mt-6 sm:mt-8">
          <img className="h-32 w-32 mb-4" src={floatingImg} />
          <h1 className="text-2xl font-bold font-poppins mb-2">
            Featured Project
          </h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Movie Search App
          </h2>
          <a
            href="https://movflix-site.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#9B37FF] text-lg font-bold text-white px-6 py-4 rounded-sm hover:bg-violet-600 transition">
              View Project
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-gradient-to-br from-purple-600 to-blue-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative lg:h-[32rem] lg:w-[20rem] w-60 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-4 w-20 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <a
        href="https://movflix-site.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={floatingPhoneImg}
          alt="Phone Screen Content"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </a>
    </div>
  );
};

export default Example;
