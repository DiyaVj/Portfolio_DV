'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButtons from './TabButtons';
import { CodeBracketIcon,PaintBrushIcon,ArrowRightIcon,BuildingOfficeIcon,PuzzlePieceIcon,PaperAirplaneIcon,PaperClipIcon } from '@heroicons/react/24/solid';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li className='flex flex-row'><CodeBracketIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" /> Web Development</li>
                <li className='flex flex-row'> <PaintBrushIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" />UI/UX Designing</li>
                <li className='flex flex-row'> <CodeBracketIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" />Data Structures & Algorithm</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li className='flex flex-row'><PuzzlePieceIcon className="h-5 text-purple-400 cursor-pointer group-hover/link:text-white" />Gold Microsoft Learn Student Ambassadors</li>
                <li className='flex flex-row'><PaperAirplaneIcon className="h-5 text-purple-400 cursor-pointer group-hover/link:text-white" />Mentor at GirlScript Summer of Code</li>
                <li className='flex flex-row'><PaperClipIcon className="h-5 text-purple-400 cursor-pointer group-hover/link:text-white" />Tech Fellow at Harvard WECode</li>
            </ul>
        )
    },
    {
        title: "Companies",
        id: "companies",
        content: (
            <ul>
                <li className='flex flex-row'><BuildingOfficeIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" />Former Software Engineer Intern at Microsoft</li>
                <li className='flex flex-row'><BuildingOfficeIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" />DevRel Intern at Lit Protocol</li>
                <li className='flex flex-row'><BuildingOfficeIcon className="h-5 w-10 text-purple-400 cursor-pointer group-hover/link:text-white" />Tech Trainee at Synoriq</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    }

  return (
    <section className='py-20 text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                            <Image
                                src="/images/Background2.png"
                                alt="hero image"
                                className='rounded'
                                width={500}
                                height={500}
                            />
                    
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                   A Little About Me...
                </h2>
                <p className='text-base lg:text-lg text-justify'>
                    I'm all about ambition, motivation, and focus, driven by a passion for creating innovative solutions and diving into the world of new technologies. I thrive on challenging projects that demand problem-solving skills and creativity, always eager to learn from others and collaborate with diverse teams.
                </p>
                <p className='text-base lg:text-lg text-justify'>
                    <br/> I'm not just passionate about technology, I'm on a mission to build scalable software solutions that truly make a positive impact in people's lives. With a keen eye for UI/UX design,I craft experiences that are not just functional but delightful.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButtons 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}> 
                        {" "}Tech I Use{" "}
                    </TabButtons>
                    <TabButtons 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}> {" "} My Communities {" "}
                    </TabButtons>
                    <TabButtons 
                        selectTab={() => handleTabChange("companies")} 
                        active={tab === "companies"}> {" "} Companies I worked with {" "}
                    </TabButtons>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection