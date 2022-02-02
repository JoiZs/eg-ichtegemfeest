/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { HiBell, HiMenu, HiX } from "react-icons/hi";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import { darkContext } from "../../context/darkmode";
import gsap from "gsap";
import Link from "next/link";
import Eventbell from "./eventbell";
import { useRouter } from "next/router";

let navigation = [
  { name: "Home", href: "/", current: true, color: "" },
  { name: "Events", href: "/events", current: false, color: "" },
  { name: "About Us", href: "/aboutus", current: false, color: "" },
  {
    name: "Become a partner",
    href: "/partner",
    current: false,
    color: "bg-red-500",
  },
  {
    name: "Become a volunteer",
    href: "/volunteer",
    current: false,
    color: "bg-indigo-500",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const path = useRouter().pathname;

  useEffect(() => {
    for (let i = 0; i < navigation.length; i++) {
      if (path === navigation[i].href) {
        navigation[i].current = true;
      } else {
        navigation[i].current = false;
      }
    }
  });

  const [darkMode, setDarkMode] = useContext(darkContext);

  const darkModeHandler = () => {
    if (darkMode) {
      setDarkMode(!darkMode);
    } else {
      setDarkMode(!darkMode);
    }

    gsap.fromTo(
      "#darkIcon",
      { opacity: 0, translateY: 10, rotation: 90 },
      { opacity: 1, translateY: 0, rotation: -45 }
    );
  };

  return (
    <Disclosure
      as="nav"
      className="max-w-screen-xl -translate-x-2 sm:-translate-x-6 sm:px-8 m-auto flex-1 fixed z-50 w-full"
    >
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href={"/"} passHref>
                  <div className="flex-shrink-0 cursor-pointer flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={
                        darkMode ? "./assets/logodark.svg" : "./assets/logo.svg"
                      }
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={
                        darkMode
                          ? "./assets/logohordark.svg"
                          : "./assets/logohor.svg"
                      }
                      alt="Workflow"
                    />
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.color,
                          item.current
                            ? `${
                                item.color ? item.color : "bg-gray-600"
                              } text-white hover:brightness-125"`
                            : "dark:text-gray-300 text-gray-800 hover:brightness-110 hover:text-opacity-80",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute flex-row inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Eventbell icon={HiBell} />

                <span
                  id="darkIcon"
                  className="mx-4 text-xl cursor-pointer text-red-400 dark:text-white hover:text-red-700"
                  onClick={darkModeHandler}
                >
                  {darkMode === "dark" ? <MdNightlight /> : <MdWbSunny />}
                </span>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-red-500 bg-opacity-50 backdrop-blur-md">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-700  hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
