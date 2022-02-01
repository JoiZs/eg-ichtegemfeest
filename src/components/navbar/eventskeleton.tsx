/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  date: string;
  href: string;
}

const Eventskeleton = (props: Props) => {
  return (
    <Link href={props.href} passHref>
      <div className="w-60 my-4 py-3 cursor-pointer hover:brightness-75 border border-red-400 border-opacity-30 text-black shadow-md text-xs uppercase dark:text-white rounded-md mx-auto">
        <div className="flex flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-red-200 h-12 rounded-full ">
            <img src="./assets/logo.svg" alt="event" />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="w-36  h-6 rounded-md ">
              <span className="px-2">{props.name}</span>
            </div>
            <div className="w-24 h-6 rounded-md ">
              <span className="px-2">{props.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Eventskeleton;
