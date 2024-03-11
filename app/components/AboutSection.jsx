/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState, useTransition } from "react";
import TabButtons from "./TabButtons";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displaySkills() {
  console.log("Web Development");
  console.log("UI/UX Designing");
  console.log("Data Structures & Algorithm");
}

displaySkills();
        `}</code>
      </pre>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displayExperience() {
  console.log("Gold Microsoft Learn Student Ambassadors");
  console.log("Mentor at GirlScript Summer of Code");
  console.log("Tech Fellow at Harvard WECode");
}

displayExperience();
        `}</code>
      </pre>
    ),
  },
  {
    title: "Companies",
    id: "companies",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displayCompanies() {
  console.log("Microsoft as a Software Engineer Intern");
  console.log("Synoriq as a Tech Trainee");
}

displayCompanies();
        `}</code>
      </pre>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:flex md:items-center px-4 xl:gap-16 sm:py-6 xl:px-6">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">A Little About Me...</h2>
          <p className="text-base lg:text-lg text-justify">
            I'm not just a coder; I'm a creator, a problem-solver, and a forever learner. I find joy in turning challenges into opportunities.
            My journey in the tech world revolves around building meaningful connections and using technology as a force for positive change.
            Besides the coding gig,  I'm also pretty good at making things look nice - UI/UX design is my thing. I'm all about creating experiences that not only useful but also put a smile on your face. 
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-row justify-start mt-8">
              <TabButtons
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                I use to do...
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                My Communities
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange("companies")}
                active={tab === "companies"}
              >
                I've worked with...
              </TabButtons>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
