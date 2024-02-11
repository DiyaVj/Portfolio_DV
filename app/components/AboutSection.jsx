/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
'use client'
import {
  BuildingOfficeIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/solid'
import { useState, useTransition } from 'react'
import TabButtons from './TabButtons'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
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
    )
  },
  {
    title: 'Experience',
    id: 'experience',
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
    )
  },
  {
    title: 'Companies',
    id: 'companies',
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displayCompanies() {
  console.log("Microsoft as a Software Engineer Intern");
  console.log("Synoriq as a Tech Trainee");
}

displayCompanies();
        ` }</code>
      </pre>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="py-20 text-white" id="about">
      <div className="md:flex md:items-center px-4 xl:gap-16 sm:py-6 xl:px-6">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">A Little About Me...</h2>
          <p className="text-base lg:text-lg text-justify">
            I thrive on challenging projects, using my problem-solving skills and creativity. Eager to learn and collaborate, I'm on a mission to build scalable software solutions that genuinely impact lives. I bring a keen eye for UI/UX design, crafting experiences that are not just functional but delightful.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-row justify-start mt-8">
              <TabButtons
                selectTab={() => handleTabChange('skills')}
                active={tab === 'skills'}
              >
                I use to do...
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange('experience')}
                active={tab === 'experience'}
              >
                My Communities
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange('companies')}
                active={tab === 'companies'}
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
  )
}

export default AboutSection
