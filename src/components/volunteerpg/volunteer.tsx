import React from "react";
import { MdLocationCity, MdPhone, MdMail } from "react-icons/md";

interface Props {}

const Volunteercont = (props: Props) => {
  return (
    <div className="">
      <div className="container pt-20 max-h-screen overflow-y-scroll lg:max-w-7xl mx-auto p-4 pb-44 scrollnone ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                Sed ac magna sit amet risus tristique interdum, at vel velit in
                hac habitasse platea dictumst.
              </h2>
              <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                tincidunt vehicula. Fusce sit amet dui tellus.
              </p>
              <div className="w-full  md:w-1/3 text-indigo-700 dark:text-indigo-500">
                <ul>
                  <li className="flex flex-row items-center">
                    <MdLocationCity className="mr-2" /> 202, Address, Street,
                    City
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
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="space-y-12 text-indigo-500">
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-gray-300 dark:bg-indigo-50 text-indigo-600">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    Responsive Elements
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    All elements are responsive and provide the best display in
                    all screen size. It&#x27;s magic !
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-gray-300 dark:bg-indigo-50 text-indigo-600">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    Flexible Team
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    Flexibility is the key. All team is available 24/24 and
                    joinable every day on our hotline.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-gray-300 dark:bg-indigo-50 text-indigo-600">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    Ecologic Software
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    Our Software are ecologic and responsable. Green is not just
                    a color, it&#x27;s a way of life.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteercont;
