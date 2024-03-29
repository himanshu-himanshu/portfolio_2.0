import React from "react";

import { SiJavascript } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { TbFileTypeHtml } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#312244] to-[#272640]">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-row items-center text-6xl sm:text-6xl md:text-8xl font-Fascinate text-secondary">
          <span className="">Tech Skills</span>
        </div>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8 font-Fascinate tracking-widest mt-8">
          <div className="my-12 mx-8 grid grid-cols-5">
            <span className="p-3 shadow-lg flex justify-center items-center col-span-2">
              <TbFileTypeHtml className="text-9xl" />
            </span>

            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiCsswizardry className="text-9xl text-blue-500" />
            </span>

            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiJavascript className="text-9xl text-yellow-500" />
            </span>

            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiReact className="text-9xl text-green-800" />
            </span>

            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiRedux className="text-9xl text-purple-600" />
            </span>

            <span className="p-3 shadow-lg flex justify-center items-center col-span-2">
              <TbBrandNextjs className="text-9xl text-gray-300" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center">
              <FaNodeJs className="text-9xl" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiTailwindcss className="text-9xl text-sky-600" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiNpm className="text-9xl text-red-600" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiMongodb className="text-9xl text-green-600" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center col-span-2">
              <VscGithub className="text-9xl" />
            </span>
            <span className="p-3 shadow-lg flex justify-center items-center">
              <SiPostman className="text-9xl text-orange-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
