import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image from "../assets/project1.webp";

const ProjectCard = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ type: "spring", bounce: 0.4, damping: 12, duration: 1 }}
      className="flex flex-col md:w-10/12 lg:w-full shadow-lg"
    >
      <motion.div>
        <div className="bg-background flex flex-row justify-center aspect-square items-center rounded-t-lg relative">
          <motion.div
            initial={{ scaleX: 0, opacity: 0, rotateZ: "10deg" }}
            animate={{ scaleX: 1, opacity: 1, rotateZ: "0deg" }}
            transition={{
              type: "spring",
              damping: 20,
              bounce: 0.2,
              duration: 0.3,
              delay: 0.5,
            }}
            className="w-10/12"
          >
            <Image className="w-full" src={image} alt={"dasd"}></Image>
          </motion.div>
          <div className="absolute w-full h-full bg-pageBackground rounded-t-lg cursor-pointer opacity-5"></div>
        </div>
        <div className=" flex-col bg-third p-8 rounded-b-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="font-bold text-base"
              >
                Qpay
              </motion.h3>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-forth text-sm font-bold cursor-pointer hover:text-primary mt-1"
              >
                E-Commarce
              </motion.span>
            </div>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-primary hover:bg-forth text-white font-bold py-2  px-4 rounded-lg"
            >
              View
            </motion.button>
          </div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-sm text-gray-400 mt-4"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
