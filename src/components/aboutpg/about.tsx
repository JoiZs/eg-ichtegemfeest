import React from "react";
import { MdMarkChatUnread } from "react-icons/md";

interface Props {}

const about = [
  {
    title: "title",
    description:
      "Nobis a inventore ratione labore magnam dignissimos incidunt alias officiis doloresquibusdam, necessitatibus error culpa optio fugiat aperiam eos",
  },
  {
    title: "title",
    description:
      "Nobis a inventore ratione labore magnam dignissimos incidunt alias officiis doloresquibusdam, necessitatibus error culpa optio fugiat aperiam eos",
  },
  {
    title: "title",
    description:
      "Nobis a inventore ratione labore magnam dignissimos incidunt alias officiis doloresquibusdam, necessitatibus error culpa optio fugiat aperiam eos",
  },
];

export const About = (props: Props) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6 p-6 ">
        <div className="mb-16 text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            ICHTEGEM
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Us
          </p>
        </div>
        <div className="flex flex-wrap my-12 dark:text-white">
          {about.map((el) => (
            <>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <MdMarkChatUnread className="text-red-500 text-xl" />
                  <div className="ml-4 text-xl capitalize  text-red-700">
                    {el.title}
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  {el.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
