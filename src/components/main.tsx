import React, { ComponentType } from "react";
import Bottomlinks from "./footer/bottomlinks";
import Nav from "./navbar/nav";

interface Props {
  component: ComponentType;
}

const Main = (props: Props) => {
  return (
    <div className="text-indigo-500 h-screen w-screen bg-white dark:bg-slate-900">
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Nav />
        {<props.component />}
        <Bottomlinks />
      </section>
    </div>
  );
};

export default Main;
