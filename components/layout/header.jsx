import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="px-4 lg:px-8 h-12 bg-white lg:h-16  w-full font-sans flex items-center justify-between">
      <Link href="/">
        <div className=" w-24 lg:w-32">
          <Image layout="responsive" alt="Logo picture" src={Logo} />
        </div>
      </Link>
      <nav>
        <ul className="lg:flex hidden text-xl text-custom-black">
          <li className="px-4">
            <Link href="/">Home </Link>
          </li>
          <li className="px-4">
            <Link href="/shop">Shop </Link>
          </li>
          <li className="px-4">Contact</li>
        </ul>
      </nav>
      <GiHamburgerMenu
        className="w-6 h-6 lg:hidden"
        onClick={() => {
          setShowNav(!showNav);
        }}
      />
      <div
        className={`px-4 w-full h-screen  pt-3 flex flex-col lg:hidden items-center bg-custom-black fixed z-50 top-0 transition-all duration-300 ${
          showNav ? `left-0` : `left-full`
        }`}
      >
        <AiOutlineClose
          className="w-7 h-7 text-white self-end"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
        <nav className=" mt-72">
          <ul className="flex flex-col text-3xl text-white text-center">
            <li className="py-4 border-b">
              <Link href="/">Home </Link>
            </li>
            <li className="py-4 border-b">
              {" "}
              <Link href="/shop">Shop </Link>
            </li>
            <li className="py-4">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
