import React from "react";

import Image from "next/image";
import portfolioImg from "../public/assets/projects/portfolio.jpg";
import ptrunImg from "../public/assets/projects/ptrun.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="NextJS Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            technologies="NextJs / Tailwind"
          />
          <ProjectItem
            title="PTRun Multiplayer Game"
            backgroundImg={ptrunImg}
            projectUrl="/ptrun"
            technologies="JavaScript / GoLang / Phaser"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
