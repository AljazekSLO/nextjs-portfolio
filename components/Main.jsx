import React from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full text-center h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            YOUR PERSONAL WEB DEVELOPER
          </p>
          <h1 className="py-4 text-gray-700">
            Sup, I&apos;m <span className="text-[#5651e5]">Aljaž Radovan</span>{" "}
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Quickly explained, I&apos;m a full-stack web developer specializing
            in building dynamic websites. Currently, I&apos;m focused on
            building modern front-end web applications with React Framework
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://github.com/AljazekSLO" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="https://www.instagram.com/aljazekyt/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineInstagram />
              </div>
            </Link>
            <Link href="/#contact" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/#about" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
