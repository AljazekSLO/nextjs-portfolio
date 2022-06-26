import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt="/"
          src={propertyImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            efficitur diam. In cursus malesuada porta. Nulla sed augue at libero
            vulputate venenatis et nec justo. Suspendisse potenti. Aliquam
            gravida consequat elit eu pellentesque. Fusce feugiat justo ut
            libero eleifend pharetra. Etiam feugiat fermentum enim, nec
            ullamcorper metus fermentum non. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Morbi eu nibh eleifend, pellentesque erat lacinia, sagittis justo.
            Vivamus mauris eros, malesuada sit amet libero eu, accumsan
            imperdiet urna. Curabitur purus velit, malesuada vel lacus ac,
            suscipit tempus libero. Sed vel felis tempor, finibus turpis ut.
            (enyoed, kaj sm se naucu, zakaj sm se odlocu)
          </p>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GoogleAPI{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> FireBase{" "}
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};
export default property;
