import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import me from "../public/assets/me.webp";

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
            I&apos;m a 4rd year Student @{" "}
            <span>
              <a
                className="hover:cursor-pointer text-red-500"
                href="https://www.vegova.si/"
                target="_blank"
                rel="noreferrer"
              >
                Vegova Ljubljana
              </a>
            </span>
            . I&apos;ve started my web development journey back in 2019 when I
            joined my first HTML / CSS course. Later that year I have build my
            first static HTML / CSS page and that turned into a love for web
            development. In 2020 I wanted to learn more, so I got in touch with
            JavaScript. After that I lost motivation to code mostly because I
            didn&apos;t know what to do next. In 2021 I have finally decided to
            move on and learn more, because this is what i LOVE.
          </p>
          <p className="py-2 text-gray-600">
            Now I&apos;m spending my time working and creating projects
            everyday! Currently im learning &apos;MERN&apos; stack and I have a
            lot of projects planned out in the future!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer inline">
              Check out some of my latest projects!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl bg-[#bebebe]"
            src={me}
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
