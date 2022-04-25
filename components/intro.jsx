import { useState } from "react";
import Image from "next/image";
import React from "react";
import IntroImg from "../public/images/frontImage.webp";
import IntroImgMobile from "../public/images/introMobile.jpg";

import { Parallax } from "react-scroll-parallax";

export default function Intro() {
  return (
    <section className="relative lg:h-screen-90 overflow-hidden intro-section">
      <Parallax className="" speed={-40}>
        <div className="hidden lg:block h-screen ">
          <Image layout="responsive" alt="Logo picture" src={IntroImg} />
        </div>
      </Parallax>
      <div className=" lg:hidden">
        <Image layout="responsive" alt="Logo picture" src={IntroImgMobile} />
      </div>

      <Parallax className="absolute top-44 left-4 lg:top-0 lg:left-20" speed={-20}>
        <h1 className="text-6xl page-heading lg:text-11xl text-white">MOHEIM</h1>
        <h2 className="text-xl lg:text-4xl w-3/4 text-white">
          MOHEIM creates “new standard” to enrich your everyday life.
        </h2>
      </Parallax>
      <Parallax className="hidden lg:block absolute bottom-44 right-4 lg:bottom-36 lg:right-20" speed={-10}>
        <div className=" lg:w-96 bg-opacity-60 h-60 p-4 bg-white text-custom-black">
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quos aperiam labore dignissimos
            sunt velit accusamus quisquam optio obcaecati nemo?
          </p>
          <button className="px-6 py-1 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
            Shop
          </button>
        </div>
      </Parallax>
      <div className=" p-4 bg-white text-custom-black lg:hidden flex items-center flex-col mt-6">
        <p className="text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quos aperiam labore dignissimos
          sunt velit accusamus quisquam optio obcaecati nemo?
        </p>
        <button className="px-6 py-1 lg:px-8 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
          Shop
        </button>
      </div>
    </section>
  );
}
