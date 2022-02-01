import dynamic from "next/dynamic";
import React from "react";
import Aboutpg from "../components/aboutpg/aboutpg";
import Loading from "../components/loading";

interface Props {}

const MainDiv = dynamic(() => import("../components/main"), {
  loading: () => <Loading />,
  ssr: false,
});

const Aboutus = (props: Props) => {
  return <MainDiv component={Aboutpg} />;
};

export default Aboutus;
