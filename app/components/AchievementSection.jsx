'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers')
  },
  { ssr: false }
)

const achievementsList = [
  {
    metric: 'Views on my recent article',
    value: '1',
    postfix: '.7K+'
  },
  {
    prefix: 'Top',
    metric: "Contributor at GWOC'21",
    value: '10'
  },
  {
    prefix: 'Top',
    metric: 'At Samsung Solve For Tomorrow',
    value: '50'
  }
]

const AchievementSection = () => {
  return (
    <div className="py-1 px-4 xl:gap=16 sm:py-16 xl:px-16">
      <div className="rounded-md lg:py-12 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {achievementsList.map((achievements, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-2 sm:mx-4 lg:mx-0 mb-8 lg:mb-0"
            >
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row items-center">
                {achievements.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievements.value)}
                  local="en-US"
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold ml-2"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1)
                    }
                  }}
                />
                {achievements.postfix}
              </h2>

              <p className="text-[#ADB7BE] text-base md:text-lg lg:text-xl mt-2 text-center">
                {achievements.metric}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementSection
