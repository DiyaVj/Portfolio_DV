"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => {
        return import('react-animated-numbers');
    },
    { ssr: false}
)

const achievementsList = [
    {
        metric: "Views on my artical",
        value: "1",
        postfix: "K+",
    },
    {
        prefix: "Top",
        metric: "Contributor at GWOC'21",
        value: "10",
    },
    {
        prefix: "Top",
        metric: "At Samsung Solve For Tomorrow",
        value: "50",
    },
]
const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap=16 sm:py-16 xl:px-16'>
        <div className='border-[#33353f] border rounded-md py-20 px-25 lg:py-8 lg:px-16 flex flex-col lg:flex lg:flex-row items-center justify-between'>
        {achievementsList.map((achievements, index) => {
            return (
                <div key={index} 
                className='flex flex-col items-center justify-center mx-4'
                >
                <h2 className='text-white text-4xl font-bold flex flex-row'>
                    {achievements.prefix}
                    <AnimatedNumbers
                        includeComma
                        animateToNumber = {parseInt(achievements.value)}
                        local="en-US"
                        className="text-white text-4xl font-bold"
                        configs={
                            (_, index) => {
                                return {
                                    mass: 1, 
                                    friction: 100,
                                    tension: 140 * (index+1),
                                };
                            }
                        }
                    />
                    {achievements.postfix}
                </h2>
                
                    <p className='text-[#ADB7BE] text-base'>{achievements.metric}</p>
                </div>
            );
        })}
    </div>
    </div>
  );
};

export default AchievementSection