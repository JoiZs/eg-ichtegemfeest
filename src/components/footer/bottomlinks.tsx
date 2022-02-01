/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { darkContext } from "../../context/darkmode";

interface Props {}

const Bottomlinks = (props: Props) => {
  const [darkMode, setDarkMode] = useContext(darkContext);

  return (
    <div>
      <footer className=" -translate-x-2 bg-white dark:bg-slate-900 sm:-translate-x-6 sm:px-8 fixed bottom-0 w-full py-4 max-w-screen-xl m-auto flex-1 z-50">
        <div className="max-w-screen-xl mx-auto uppercase">
          <p className="text-xs text-center text-gray-600 dark:text-gray-300">
            In collaboration with
          </p>
          <div className="flex flex-row w-full justify-evenly">
            <img
              className="w-32 px-4 lg:w-48 lg:px-8"
              src={
                darkMode
                  ? "./assets/partners/partner1dark.svg"
                  : "./assets/partners/partner1.svg"
              }
              alt="partner"
            />
            <img
              className="w-32 px-4 lg:w-48 lg:px-8"
              src={
                darkMode
                  ? "./assets/partners/partner2dark.svg"
                  : "./assets/partners/partner2.svg"
              }
              alt="partner"
            />
            <img
              className="w-32 px-4 lg:w-48 lg:px-8"
              src={
                darkMode
                  ? "./assets/partners/partner3dark.svg"
                  : "./assets/partners/partner3.svg"
              }
              alt="partner"
            />
          </div>
          <ul className=" w-full lg:max-w-screen-md mx-auto text-sm uppercase tracking-wider font-light flex flex-wrap justify-evenly">
            <li className="my-2">
              <a
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex max-w-xs pt-4 text-xl mx-auto items-center justify-between">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottomlinks;
