import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Homepg from "../components/homepg/homepg";
import Loading from "../components/loading";

const MainDiv = dynamic(() => import("../components/main"), {
  loading: () => <Loading />,
  ssr: false,
});

const Home: NextPage = () => {
  return <MainDiv component={Homepg} />;
};

export default Home;
