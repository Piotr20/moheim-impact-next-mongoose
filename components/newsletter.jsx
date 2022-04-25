import { useState } from "react";
import NewsletterImg from "../public/images/newsletter.jpg";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  async function signForNewsletter(e) {
    e.preventDefault();
    const res = await fetch("/api/newsletters", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
  }
  return (
    <section className="relative border-b-16 lg:border-b-32 border-white overflow-hidden lg:h-screen-90">
      <Parallax className="" speed={-40}>
        <div className="hidden lg:block h-full overflow-hidden">
          <Image layout="responsive" alt="Logo picture" src={NewsletterImg} />
        </div>
      </Parallax>
      <div className=" lg:hidden">
        <Image layout="responsive" alt="Logo picture" src={NewsletterImg} />
      </div>
      <div className="p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-60  bg-white text-custom-black">
        <h2 className="text-3xl lg:text-4xl font-bold text-center ">Join our newsletter.</h2>
        <p className="text-base lg:text-xl text-center  pt-2 lg:pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, vitae! Praesentium nisi temporibus
          est provident vel quae repudiandae! Reiciendis autem natus aliquid non blanditiis beatae?
        </p>
        <form
          className="flex w-full items-center justify-center mt-2 lg:mt-4"
          method="POST"
          onSubmit={signForNewsletter}
        >
          <input
            placeholder="Your email..."
            className=" lg:h-9  px-2 py-1 outline-none bg-transparent border-2 border-custom-black"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <button
            type="submit"
            className="mx-auto lg:mx-0 mt-0 flex px-6 py-1 lg:px-8 font-bold border-2 bg-custom-black text-white hover:border-l-0 border-custom-black hover:bg-white hover:text-custom-black transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
