/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {}

export const Starthome = (props: Props) => {
  useEffect(() => {
    gsap
      .fromTo(
        "#textTitle",
        { opacity: 0 },
        { opacity: 1, delay: (i) => i * 0.2 }
      )
      .then(() => {
        gsap.fromTo("#textTime", { opacity: 0 }, { opacity: 1 });
      });
  });
  return (
    <div>
      <main className="relative overflow-hidden h-screen">
        <div className=" flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                <div className="flex flex-row">
                  {"Be'on".split("").map((el) => (
                    <span
                      className="tracking-wider opacity-0"
                      key={el + Math.random()}
                      id="textTitle"
                    >
                      {el}
                    </span>
                  ))}
                </div>
                <span className="text-5xl sm:text-7xl">
                  <span id="textTime" className="opacity-0">
                    Time{" "}
                  </span>
                  <span className="text-lg text-red-400 tracking-wider">
                    Ichtegem Feest
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                officiis culpa harum quos veritatis dolor? Praesentium esse
                nihil id nisi voluptate repellat nobis. Laudantium, et ad id
                dignissimos beatae doloribus.
              </p>
              <div className="flex mt-8">
                <a
                  href="/events"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500 dark:text-white hover:bg-red-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
