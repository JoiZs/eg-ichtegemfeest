import React from "react";
import Eventmain from "./event";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import Eachevent from "./eachevent";

interface Props {}

const events = [
  {
    name: "Evening market",
    date: "15th July",
    href: "eveningmarket",
    time: "@ 17:00 PM",
    counttime: "2022-07-15 17:00",
    location: "Engelstraat",
    live: false,
    description: undefined,
    photos: {
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
    },
  },
  {
    name: "The Damnettes",
    date: "15th July",
    href: "thedamnettes",
    time: "@ 20:00 PM",
    counttime: "2022-07-15 20:00",
    location: "Huis Dekeyser",
    live: true,
    description: undefined,
    photos: {
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
    },
  },
  {
    name: "Get Ready!",
    date: "15th July",
    href: "getready",
    time: "@ 22:00 PM",
    counttime: "2022-07-15 22:00",
    location: "Huis Dekeyser",
    live: true,
    description: undefined,
    photos: {
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
    },
  },
  {
    name: "Dansstudio Timeless",
    date: "16th July",
    href: "dansstudiotimeless",
    time: "@ 18:00 PM",
    counttime: "2022-07-16 18:00",
    location: "Huis Dekeyser",
    live: false,
    description: undefined,
    photos: {
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
    },
  },
  {
    name: "Vlaanderen Zingt",
    date: "16th July",
    href: "vlannderenzingt",
    time: "@ 20:00 PM",
    counttime: "2022-07-16 20:00",
    location: "Huis Dekeyser",
    live: false,
    description: undefined,
    photos: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
  },
];

const Eventpg = (props: Props) => {
  return (
    <div className="h-screen max-h-screen">
      <Swiper
        className="h-screen"
        mousewheel
        modules={[Mousewheel]}
        direction="vertical"
        pagination
      >
        <SwiperSlide>
          <Eventmain />
        </SwiperSlide>
        {events.map((el) => (
          <SwiperSlide key={el.name}>
            <Eachevent
              name={el.name}
              date={el.date}
              time={el.time}
              description={el.description}
              photos={undefined}
              linkid={el.href}
              counttime={el.counttime}
              live={el.live}
              location={el.location}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Eventpg;
