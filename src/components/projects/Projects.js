import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { Project1, Project2, Project4 } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Equipment Hiring"
          weblink="https://polite-lollipop-713e27.netlify.app/"
          gitlink="	https://github.com/vimalAdithan/guvi-hackathon2-frontend"
          src={Project2}
        />
        <ProjectCard
          title="YouTube Clone"
          gitlink="https://github.com/vimalAdithan/youtube-clone"
          weblink="https://sunny-sopapillas-3ca556.netlify.app/"
          src={Project1}
        />
        <ProjectCard
          title="Diet suggestion app"
          gitlink="https://github.com/vimalAdithan/Diet-suggestion-frontend"
          weblink="https://chic-sorbet-ba91d3.netlify.app/"
          src={Project4}
        />
      </div>
    </section>
  );
};

export default Projects;
