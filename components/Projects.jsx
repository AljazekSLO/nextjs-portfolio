import React from "react";

import Image from "next/image";
import portfolioImg from "../public/assets/projects/portfolio.jpg";
import ptrunImg from "../public/assets/projects/ptrun.jpg";
import authImg from "../public/assets/projects/auth.jpg";
import glavniImg from "../public/assets/projects/glavni.jpg";
import kolosejImg from '../public/assets/projects/kolosej.jpg'
import memoriesImg from '../public/assets/projects/memories.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem
            title="NextJS React Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="https://github.com/AljazekSLO/nextjs-portfolio"
            technologies="Reacz / NextJs / Tailwind"
          />
          <ProjectItem
            title="Kolosej 2.0"
            backgroundImg={kolosejImg}
            projectUrl="https://github.com/AG-Industries/Kolosej2.0/"
            technologies="React / Tailwind / Node"
          />
          <ProjectItem
            title="Memories App"
            backgroundImg={memoriesImg}
            projectUrl="https://github.com/AljazekSLO/Memories-App"
            technologies="MERN (MongoDB, Express, React, Node)"
          />
          <ProjectItem
            title="Netflix Clone 'Aljoflix'"
            backgroundImg={netflixImg}
            projectUrl="https://github.com/AljazekSLO/Netflix2.0"
            technologies="React / Firebase"
          />
          <ProjectItem
            title="Authentication App"
            backgroundImg={authImg}
            projectUrl="https://github.com/AljazekSLO/AuthAPP"
            technologies="EJS / JavaScript / PassportJS"
          />
          <ProjectItem
            title="Glavni.si"
            backgroundImg={glavniImg}
            projectUrl="https://glavni.si/"
            technologies="HTML / CSS / Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
