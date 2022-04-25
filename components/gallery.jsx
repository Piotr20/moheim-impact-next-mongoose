import Gallery1 from "../public/images/gallery-1.png";
import Gallery2 from "../public/images/gallery-2.jpg";
import Gallery3 from "../public/images/gallery-3.jpg";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Gallery() {
  return (
    <section className="py-6 lg:py-16">
      <h2 className="text-4xl lg:text-5xl font-bold pb-4 lg:pb-16">What we do.</h2>
      <div className="lg:grid h-screen lg:grid-cols-5 lg:grid-rows-2 lg:gap-12 mt-2 lg:mt-4 lg:items-center justify-items-center lg:px-48">
        <div className="col-span-3 row-span-2 w-full">
          <Parallax className="" speed={5}>
            <Image style={{ objectFit: "cover" }} layout="responsive" alt="Logo picture" src={Gallery1} />
          </Parallax>
          <h3 className="hidden lg:block mt-4 font-bold text-3xl">Check out our offer</h3>
          <button className="hidden lg:block px-6 py-1 lg:px-8 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
            Shop
          </button>
        </div>

        <div className="col-span-2 row-span-1 lg:w-full justify-self-start overflow-hidden">
          <Parallax className="" speed={10}>
            <Image style={{ objectFit: "cover" }} layout="responsive" alt="Logo picture" src={Gallery3} />
          </Parallax>
        </div>

        <div className="col-span-2 row-span-1 lg:w-full justify-self-start overflow-hidden">
          <Parallax className="" speed={10}>
            <Image style={{ objectFit: "cover" }} layout="responsive" alt="Logo picture" src={Gallery2} />
          </Parallax>
          <h3 className="text-center lg:hidden mt-12 font-bold text-3xl">Check out our offer</h3>
          <button className="flex lg:hidden mx-auto px-6 py-1 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}
