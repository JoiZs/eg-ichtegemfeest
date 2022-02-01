import dynamic from "next/dynamic";
import React from "react";
import Loading from "../components/loading";
import Volunteerpg from "../components/volunteerpg/volunteerpg";

interface Props {}

const MainDiv = dynamic(() => import("../components/main"), {
  loading: () => <Loading />,
  ssr: false,
});

const Volunteer = (props: Props) => {
  return <MainDiv component={Volunteerpg} />;
};

export default Volunteer;
