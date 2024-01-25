"use client";
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Image from 'next/image';

const projectsData = [
    {
        id:1,
        title: "PregEdu",
        description: "PregEdu addresses the lack of accessible pregnancy education by providing a platform with expert resources, a health check feature, and a community for support.",
        image: "https://github.com/DiyaVj/preg-edu/assets/87236107/d64b0e25-6092-4fe4-a624-94ce01a7eb54",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DiyaVj/preg-edu",
        previewUrl: "https://preg-edu.vercel.app/" 
    },
    {
        id:2,
        title: "XSentix",
        description: "A X (Formarly Tweeter) sentiment analyser tool.",
        image: "https://storage.googleapis.com/s4a-prod-share-preview/default/st_app_screenshot_image/082c77d6-fdd6-42a3-b520-0a96e6629607/Raw_App_Screenshot.png",
        tag: ["All", "ML"],
        gitUrl: "https://github.com/DiyaVj/XSentix",
        previewUrl: "https://xsentix.streamlit.app/" 
    },
    {
        id:3,
        title: "Cinemilar",
        description: "A movie recommendation application which uses content based filtering and recommends the top 5 best similar movies based on the similarity of thier meta data.",
        image: "https://storage.googleapis.com/s4a-prod-share-preview/default/st_app_screenshot_image/bf9dff47-3e85-4390-8b6e-8be59e5e138a/Raw_App_Screenshot.png",
        tag: ["All", "ML"],
        gitUrl: "https://github.com/DiyaVj/Cinemilar",
        previewUrl: "https://diyavj-cinemilar-app-kh30et.streamlit.app/" 
    },
    {
        id:4,
        title: "Menses - Period Poverty Tracker",
        description: "A web-based application that can be used as a tracker to help needy people locate donors near them and contact donors.",
        image: "https://github.com/DiyaVj/DiyaVj/assets/87236107/5e35e148-9242-4955-8bdc-968a2e971573",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DiyaVj/Menses-Period-Poverty-Tracker",
        previewUrl: "https://diyavj.github.io/Menses-Period-Poverty-Tracker/" 
    },
    {
        id:5,
        title: "Solar System WebVR",
        description: "Virtual reality solar system experience in web browser, built with AFrame.",
        image: "https://user-images.githubusercontent.com/87236107/179387006-9932d262-19e9-496c-aae0-4d326bc9e5d6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DiyaVj/Solar-System-WebVR",
        previewUrl: "https://diyavj.github.io/Solar-System-WebVR/" 
    },
    {
        id:6,
        title: "Ignite After Party - India Website",
        description: "Website for MICROSOFT IGNITE 2022 AFTER PARTY BY MLSA INDIA",
        image: "https://wearemercury.com/wp-content/uploads/2022/09/MS-Ignite-2022.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DiyaVj/Ignite-India",
        previewUrl: "https://diyavj.github.io/Ignite-India/" 
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            Check Out My Projects!
        </h2>
        <div className='text-white flex flex-row justify-center item-center gap-2 py-6'>
            <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="ML"
                isSelected={tag === "ML"}
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl} 
                />
            ))}
        </div>
        </section>
    )
    }

    export default ProjectsSection;