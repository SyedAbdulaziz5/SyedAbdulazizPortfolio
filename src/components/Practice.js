import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeUpDiv = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariants}
      className="bg-gray-100 p-10 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold">Hello, I'm fading up!</h2>
      <p className="mt-4 text-gray-700">
        This is a simple example of a div fading up as you scroll down.
      </p>
    </motion.div>
  );
};

export default FadeUpDiv;
