import React from "react";
import Image from "next/dist/client/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 ">
            I'm a 4rd year Student @ Vegova Ljubljana. I've started my web
            development jurney in 2019, when I joined my first HTML / CSS
            course. Later that year I have build my first static HTML / CSS page
            and that turned into a love for web development. In 2020 I wanted to
            learn more, so I got in touch with JavaScript. After that I lost
            motivation to code mostly because I didn't know what to do next. In
            2021 I have finally decided to move on, because this is what i love.
          </p>
          <p className="py-2 text-gray-600">
            Now I'm spending my time learning and creating projects everyday!
            Currently im learning "MERN" stack and I have a lot of projects
            planned out in the future!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl bg-[#bebebe]"
            src="/../public/assets/me.webp"
            alt=""
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
