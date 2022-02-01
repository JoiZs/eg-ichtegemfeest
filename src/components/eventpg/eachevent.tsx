/* eslint-disable @next/next/no-img-element */
import React from "react";
import Eventtimer from "./eventtimer";
import { RiLiveFill } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";

interface Props {
  name: string;
  date: string;
  time: string;
  counttime: string;
  live: boolean;
  description?: string;
  linkid: string;
  location: string;
  photos?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
  };
}

const Eachevent = (props: Props) => {
  return (
    <section id={props.linkid}>
      <div className="max-w-screen-xl pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pb-48 p-4 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 ">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
              <h4 className="mt-2 text-2xl flex flex-row items-end leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                {props.name}{" "}
                {props.live ? <RiLiveFill className="text-red-600 pl-2" /> : ""}
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {props.description
                  ? props.description
                  : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fuga explicabo cum architecto saepe a accusantium eligendi exercitationem ut! Aliquam sapiente minima dolorum modi laborum! Nulla velit libero est praesentium!"}
              </p>
              <Eventtimer
                counttime={props.counttime}
                date={props.date}
                time={props.time}
              />
              <h3 className="text-red-700 pt-8 tracking-widest uppercase font-semibold justify-center flex flex-row items-center">
                <FiMapPin />
                {props.location}
              </h3>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src={
                      props.photos
                        ? props.photos[1]
                        : "https://images.pexels.com/photos/5637704/pexels-photo-5637704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt="1"
                  />
                  <img
                    className="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src={
                      props.photos
                        ? props.photos[2]
                        : "https://images.pexels.com/photos/5637704/pexels-photo-5637704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    className="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src={
                      props.photos
                        ? props.photos[3]
                        : "https://images.pexels.com/photos/5637704/pexels-photo-5637704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt="3"
                  />
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src={
                      props.photos
                        ? props.photos[4]
                        : "https://images.pexels.com/photos/5637704/pexels-photo-5637704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eachevent;
