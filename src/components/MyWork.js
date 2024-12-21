import React from "react";
import FloatingPhone from "../components/FloatingPhone";
import { Col, Row } from "antd";
// import floatingImg from "../assets/images/Capture-removebg-preview.png";
import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <div
      id="MyWork"
      className="work bg-[#1A191D] text-white px-6 md:px-16 xl:px-60 md:pb-16"
    >
      <Row
        gutter={[16, 32]}
        align="middle"
        justify="center"
        className="flex flex-wrap"
      >
        <Col xs={24} md={12} className="text-center md:text-left">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // Triggers animation once when in view
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-[7rem] font-semibold font-poppins lg:leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              My <br /> Work
            </motion.h1>
            <motion.p
              className="text-lg font-roboto-mono md:text-xl lg:text-[1.3rem] pt-4 tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }} // Adding a small delay for the paragraph
            >
              Deployed scalable travel, event, and telemedicine web and hybrid
              mobile apps using React SPA and PWA. Collaborated on 140+ projects
              with 50+ clients all around the world. I am also interested in
              data analytics and visualization.
            </motion.p>
          </motion.div>
        </Col>
        <Col xs={24} md={12} className="text-center flex">
          <div className="flex justify-center items-center h-full">
            <FloatingPhone />
          </div>
          {/* <div className="flex flex-col justify-end">
              <img className="lg:h-44 lg:w-44 -translate-x-3" src={floatingImg} />
              <h1 className="lg:text-2xl font-bold font-poppins mb-2">
                Featured Project
              </h1>
              <h2 className="lg:text-2xl font-bold text text-white mb-4">
                Movie Search App
              </h2>
              <a
                href="https://movflix-site.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#9B37FF] lg:text-lg font-bold text text-white lg:px-6 lg:py-4 rounded-sm hover:bg-violet-600 transition">
                  View Project
                </button>
              </a>
            </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default MyWork;
