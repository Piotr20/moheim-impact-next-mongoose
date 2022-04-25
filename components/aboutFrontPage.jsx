export default function AboutFront() {
  return (
    <section className="py-6 lg:py-16">
      <div className=" lg:hidden">
        <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
        <h2 className="text-center font-bold text-4xl my-2">
          MOHEIM creates “new standard” to enrich your everyday life.
        </h2>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur sequi quos, ipsum, at ullam
          sapiente rem cupiditate beatae praesentium ratione accusantium, accusamus corporis iste reiciendis
          labore placeat atque neque. Doloribus aliquid tempora asperiores atque debitis assumenda reiciendis
          ea non, odio aperiam neque sapiente id obcaecati provident cupiditate officia accusamus.
        </p>
        <button className="px-6 flex mx-auto py-1 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
          About
        </button>
      </div>
      <article className="flex justify-center">
        <div className="hidden lg:flex justify-center  w-8/12 ">
          <div className="pr-64">
            <h3 className="font-bold text-2xl whitespace-nowrap leading-loose">ABOUT US</h3>
          </div>
          <div>
            <h2 className=" font-bold text-5xl my-2">
              <span className=" -ml-16"> MOHEIM creates</span>
              <br />
              <span className=" -ml-6"> “new standard” to</span> <br />
              <span> enrich your everyday life.</span>
            </h2>
            <p className="my-4 lg:my-6 text-base lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur sequi quos, ipsum, at
              ullam sapiente rem cupiditate beatae praesentium ratione accusantium, accusamus corporis iste
              reiciendis labore placeat atque neque. Doloribus aliquid tempora asperiores atque debitis
              assumenda reiciendis ea non, odio aperiam neque sapiente id obcaecati provident cupiditate
              officia accusamus.
            </p>
            <button className="px-6 flex py-1 lg:px-8 mt-6 font-bold border-2 border-custom-black hover:bg-custom-black hover:text-white transition-colors duration-300">
              About
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
