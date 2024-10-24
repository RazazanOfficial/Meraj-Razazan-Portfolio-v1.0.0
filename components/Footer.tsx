import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready for a{" "}
          <span className="text-purple">successful collaboration?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-cneter">
          If you&apos;re excited to start a project together, feel free to drop
          me a message at razazanOfficial@gmail.com or simply{" "}
          <span className="text-red-500">click</span> the{" "}
          <span className="text-red-700 font-bold">button below!</span>
        </p>
        <a href="mailto:razazanOfficial@gmail.com">
          <MagicButton
            title="Let's get in touch!"
            position="right"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Meraj Razazan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item, i) => (
            <div
              key={i}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={item.href} target="_blank">
                <Image
                  src={item.img}
                  alt={item.id.toString()}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
