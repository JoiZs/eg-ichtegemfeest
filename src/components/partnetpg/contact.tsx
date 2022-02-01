import React from "react";
import { MdLocationCity, MdMail, MdPhone } from "react-icons/md";

interface Props {}

const Contact = (props: Props) => {
  return (
    <div className="lg:col-span-3 lg:col-start-2 col-span-6 flex flex-col justify-center h-screen items-center ">
      <div className="text-gray-700 dark:text-gray-300 p-6">
        <span className="text-5xl">Get in touch </span>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eum saepe
          sequi velit possimus, blanditiis sapiente voluptatum corrupti quos
          distinctio quaerat. Adipisci iusto at eveniet sed deleniti nobis
          aspernatur in?
        </span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 p-6 leading-8">
        <ul>
          <li className="flex flex-row items-center">
            <MdLocationCity className="mr-2" /> 202, Address, Street, City
          </li>
          <li className="flex flex-row items-center">
            {" "}
            <MdPhone className="mr-2" /> (+00) 228 482985
          </li>
          <li className="flex flex-row items-center">
            <MdMail className="mr-2" /> you@mail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
