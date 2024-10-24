"use client";

import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { GridGlobe } from "./GridGlobe";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { FaFileDownload } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("RazazanOfficial@gmail.com");
    setCopied(true);
  };
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={cn(
        "overflow-hidden row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgba(4,7,32,0.7)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg lg:text-xl xl:text-3xl max-w-96 z-10">
            {title}
          </div>
          <div className="font-sans font-light text-[#c1c2d3] text-sm md:text-xs lg:text-sm z-10 w-[50%]">
            {description}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 w-fit absolute right-[3px] -top-[16px] cursor-pointer">
              <div className="flex flex-col gap-1 lg:mt-5">
                {["HTML5", "CSS3", "Bootstrap", "Tailwind", "JavsScript"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className=" py-2 px-3 text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:bg-[#0b0d20] transition-all text-white-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col gap-1 lg:mt-5">
                {[
                  "React.Js",
                  "Next.Js",
                  "Three.Js",
                  "Express.Js",
                  "MongoDB",
                ].map((item, i) => (
                  <span
                    key={i}
                    className=" py-2 px-3 text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:bg-[#0b0d20] transition-all text-white-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 4 && (
            <a
              className="w-[50%]"
              href="/resume.pdf"
              download="Resume_MerajRezazan.pdf"
            >
              <MagicButton
                title="Click here"
                position="right"
                icon={<FaFileDownload />}
              />
            </a>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={"absolute -bottom-5 right-0"}>
                <Lottie options={defaultOptions} />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
