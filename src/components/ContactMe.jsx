import React from "react";

import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#212f45] to-[#1b3a4b]">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-row items-center text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-Fascinate text-secondary">
          <span className="">HIMANSHU</span>
        </div>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8 font-Fascinate text-[#f2c488] tracking-widest mt-4">
          <div className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl">
            WEB
          </div>
          <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="">DEVELOPER</span>
            <span className="flex flex-row items-center justify-center z-40">
              DESIGNER <GiSpiderWeb className="text-4xl text-[#f7bb2e]" />
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14 border border-tertiary text-white">
          <FaLinkedinIn className="border border-tertiary hover:bg-tertiary cursor-pointer text-7xl px-6 py-6 duration-200" />
          <FaGithubAlt className="border border-tertiary hover:bg-tertiary cursor-pointer text-7xl px-6 py-6 duration-200" />
          <AiFillInstagram className="border border-tertiary hover:bg-tertiary cursor-pointer text-7xl px-6 py-6 duration-200" />
          <FaFileArrowDown className="border border-tertiary hover:bg-tertiary cursor-pointer text-7xl px-6 py-6 duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
