"use client";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1">
                <div className="col-span-8 place-self-center text-center">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            'Diya Vijay',
                            1000,
                            'Software Engineer',
                            1000,
                            'Web Developer',
                            1000,
                            'UI/UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome To My Portfolio!
                    </p>
                    <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-6  bg-purple-600 hover:bg-slate-800 text-white hover:text-purple-500">
                    <a href="https://bento.me/diya-vj" target="_blank"> Explore my UX Portfolio </a>
                    </button>

                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 hover:bg-slate-800 text-white hover:text-purple-500 mt-3">
                        <span className="block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2"> 
                           <a href="https://linktr.ee/Diyavj" target="_blank"> Let's Connect! </a>
                        </span>
                    </button>
                </div>
                </div>
                {/* <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px]">
                            <Image
                                src=""
                                alt="hero image"
                                width={300}
                                height={300}
                            />
                        </div>
                </div> */}
            </div>
        </section>
    )
}

export default HeroSection
