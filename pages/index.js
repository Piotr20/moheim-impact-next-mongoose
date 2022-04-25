import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AboutFront from "../components/aboutFrontPage";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Intro from "../components/intro";
import Header from "../components/layout/header";
import Newsletter from "../components/newsletter";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    gsap.from(".page-heading", {
      opacity: 0,
      duration: { min: 0.2, max: 3 },
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-8">
        <Intro />
        <AboutFront />
        <Gallery />
        <Contact />
        <Newsletter />
      </main>
    </div>
  );
}
