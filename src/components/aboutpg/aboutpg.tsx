import React from "react";
import { About } from "./about";

interface Props {}

const Aboutpg = (props: Props) => {
  return (
    <div className="h-screen max-h-screen overflow-y-scroll scrollnone">
      <About />
    </div>
  );
};

export default Aboutpg;
