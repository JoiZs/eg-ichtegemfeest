import React, { useEffect } from "react";
import Countdown from "react-countdown";
import moment from "moment-timezone";

interface Props {
  date: string;
  time: string;
  counttime: string;
}

const Eventtimer = (props: Props) => {
  let belTime = moment.tz(props.counttime, "Europe/Brussels");
  const renderer = (props: any) => {
    if (props.completed) {
      // Render a completed state
      return (
        <h1 className="font-semibold animate-pulse uppercase tracking-widest">
          {belTime.year() + " Event has already started"}
        </h1>
      );
    } else {
      return (
        <>
          <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
            <div className="text-2xl md:text-3xl font-semibold">
              <span>{props.days}</span>
            </div>
            <div className="opacity-75 text-xs mt-3 uppercase">Day</div>
          </div>
          <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
            <div className="text-2xl md:text-3xl font-semibold">
              <span>{props.hours}</span>
            </div>
            <div className=" opacity-75 text-xs mt-3 uppercase">Hour</div>
          </div>

          <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
            <div className="text-2xl md:text-3xl font-semibold">
              <span>{props.minutes}</span>
            </div>
            <div className=" opacity-75 text-xs mt-3 uppercase">Min</div>
          </div>
          <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
            <div className="text-2xl md:text-3xl font-semibold">
              <span>{props.seconds}</span>
            </div>
            <div className=" opacity-75 text-xs mt-3 uppercase">Second</div>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <section className="bg-gradient">
        <div className="max-w-5xl mx-auto px-5 box-content">
          <div className="flex items-center flex-col -mx-5">
            <div className="w-full flex flex-row items-end justify-center py-4 uppercase px-5 mb-5 md:mb-0 text-center md:text-left">
              <h3 className="font-bold font-heading text-lg md:text-4xl text-red-700">
                {props.date}
              </h3>
              <h3 className="font-bold font-heading text-lg md:text-4xl text-gray-700 dark:text-gray-300 leading-tight">
                {props.time}
              </h3>
            </div>
            <div className="w-full md:w-auto px-5">
              <div className="flex justify-center text-gray-700 dark:text-gray-300 text-center">
                <Countdown
                  date={belTime.toDate().getTime()}
                  renderer={renderer}
                ></Countdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventtimer;
