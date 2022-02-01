import dynamic from "next/dynamic";
import React from "react";
import Eventpg from "../components/eventpg/eventpg";
import Loading from "../components/loading";

interface Props {}

const MainDiv = dynamic(() => import("../components/main"), {
  loading: () => <Loading />,
  ssr: false,
});

const Events = (props: Props) => {
  return <MainDiv component={Eventpg} />;
};

export default Events;
