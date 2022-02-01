import dynamic from "next/dynamic";
import React from "react";
import Loading from "../components/loading";
import Partnerpg from "../components/partnetpg/partnerpg";

interface Props {}

const MainDiv = dynamic(() => import("../components/main"), {
  loading: () => <Loading />,
  ssr: false,
});

const Partner = (props: Props) => {
  return <MainDiv component={Partnerpg} />;
};

export default Partner;
