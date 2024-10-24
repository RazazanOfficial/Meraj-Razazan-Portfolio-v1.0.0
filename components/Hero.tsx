import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest text-xs text-center text-blue-100 max-w-80">
            Fueled by passion, I code to create impactful solutions today and
            for a better <br />
            <span className="text-red-600 font-bold uppercase block">
              tomorrow.
            </span>
          </h2>
          <TextGenerateEffect
            words="Hi, I’m Meraj Rezazan, a Full-Stack Developer."
            filter={true}
            className="text-center text-xl sm:text-5xl lg:text-2xl xl:text-6xl 2xl:text-7xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-base md:text-xl xl:text-2xl 2xl:text-4xl">
            The one who’s perfect for your project :)
          </p>
          <a href="#about">
            <MagicButton
              title="Take a Look at My Projects"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="mb-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
