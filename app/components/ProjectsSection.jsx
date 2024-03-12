/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "PregEdu",
    description:
      "Addressing the lack of accessible pregnancy education, PregEdu offers a platform with resources, a health check feature, and a supportive community.",
    image:
      "https://github.com/DiyaVj/preg-edu/assets/87236107/d64b0e25-6092-4fe4-a624-94ce01a7eb54",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DiyaVj/preg-edu",
    previewUrl: "https://preg-edu.vercel.app/",
  },
  {
    id: 2,
    title: "XSentix",
    description:
      "XSentix is a sentiment analyzer tool for analyzing sentiments of tweets/posts on the X (Formarly Twitter) platform.",
    image:
      "https://github.com/DiyaVj/Portfolio_DV/assets/87236107/3b64300d-ee89-4c8a-b86c-372b36fec13e",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/DiyaVj/XSentix",
    previewUrl: "https://xsentix.streamlit.app/",
  },
  {
    id: 3,
    title: "Cinemilar",
    description:
      "Cinemilar introduces a movie recommendation app using content-based filtering, suggesting the top 5 similar films based on metadata analysis.",
    image:
      "https://github.com/DiyaVj/Cinemilar/assets/87236107/b0fc5eb6-6545-4ab9-9673-1cafc5fbebf4",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/DiyaVj/Cinemilar",
    previewUrl: "https://diyavj-cinemilar-app-kh30et.streamlit.app/",
  },
  {
    id: 4,
    title: "Menses - Period Poverty Tracker",
    description:
      "A web-based application, Menses serves as a tracker to help people in need locate donors nearby and connect with them.",
    image:
      "https://github.com/DiyaVj/Portfolio_DV/assets/87236107/73bce21c-22dd-4d0b-8d8c-4d65db82c4c0",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DiyaVj/Menses-Period-Poverty-Tracker",
    previewUrl: "https://diyavj.github.io/Menses-Period-Poverty-Tracker/",
  },
  {
    id: 5,
    title: "Solar System WebVR",
    description:
      "Experience the immersive virtual reality of our solar system in your web browser with Solar System WebVR, using AFrame technology for an unparalleled journey.",
    image:
      "https://github.com/DiyaVj/Cinemilar/assets/87236107/c6551a05-f8a7-44de-941a-57a73ea9fdb6",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DiyaVj/Solar-System-WebVR",
    previewUrl: "https://diyavj.github.io/Solar-System-WebVR/",
  },
  // {
  //   id: 5,
  //   title: "Ignite After Party - India Website",
  //   description:
  //     "Explore the Microsoft Ignite 2022 After Party by MLSA India on the dedicated website, Ignite After Party.",
  //   image:
  //     "https://github.com/DiyaVj/Cinemilar/assets/87236107/d3ccb31b-ddf4-4fe7-9f6c-641d1a4eb001",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/DiyaVj/Ignite-India",
  //   previewUrl: "https://diyavj.github.io/Ignite-India/",
  // },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const [isInView, setIsInView] = useInView({ triggerOnce: true, ref });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(3);
  };

  const filteredProjects = projectsData.filter(
    (project) => project.tag.includes(tag)
  );

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Journey Through My Cosmic Projects
      </h2>
      <p className="text-center text-1xl text-[#ADB7BE]"> Explore more projects on my <a href="https://github.com/DiyaVj">GitHub</a></p>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("ML")}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects
          .slice(0, visibleProjects)
          .map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
      </ul>
      {filteredProjects.length > visibleProjects && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          >
            Show More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;