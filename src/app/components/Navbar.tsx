"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";


export const Navbar = () => {
  const [state, setState] = useState<boolean>(false);

  const navigation = [
    { title: "Demos", path: "/page/demos" },
    { title: "Pages", path: "#" },
    { title: "Support", path: "#" },
    { title: "Contact", path: "#" },
  ];


  return (
    <nav className="text-black z-40 w-full md:static md:text-sm md:border-none">
      <div className="items-center px-2 mx-auto md:flex md:px-10">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <span className="font-extrabold text-xl cursor-pointer">Brainwave.io</span>
          </Link>

          <div className="md:hidden">
            <button className="text-black hover:text-gray-800" onClick={() => setState(!state)}>
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex bg-gray-100 p-2 md:p-0 md:bg-transparent md:space-x-6 md:space-y-0 gap-3">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-black font-bold text-sm">
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <div className="text-white space-y-3 font-bold items-center justify-center text-center gap-x-6 md:flex md:space-y-0 px-4 py-2 cursor-pointer hover:scale-105 transition-all bg-[#473bf0] rounded-md">
              <p>Get Started Now</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
