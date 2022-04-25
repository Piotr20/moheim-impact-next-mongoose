import Head from "next/head";
import Image from "next/image";
import ShopBackground from "../public/images/shop.webp";
import ShopBackgroundMobile from "../public/images/shopMobile.webp";
import Header from "../components/layout/header";
import { Parallax } from "react-scroll-parallax";
import ShopBody from "../components/shopBody";

export default function Shop() {
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-8">
        <div className="lg:h-screen-35 overflow-hidden relative border-b-16 lg:border-b-32 border-white">
          <Parallax className="" speed={-40}>
            <div className=" h-screen hidden lg:block ">
              <Image layout="responsive" alt="Logo picture" src={ShopBackground} />
            </div>
          </Parallax>
          <h2 className=" text-4xl font-bold text-custom-black text-center absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Shop
          </h2>
          <div className=" lg:hidden ">
            <Image layout="responsive" alt="Logo picture" src={ShopBackgroundMobile} />
          </div>
        </div>
        <ShopBody />
      </main>
    </div>
  );
}
