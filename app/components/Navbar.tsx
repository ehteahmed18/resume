'use client'

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar(){
    const [navbar, setNavbar] = useState(false);
    return(
        <div>
        <nav className="w-full lg:fixed top-0 font-mono z-10 bg-zinc-900" >
          <div className="justify-between px-4 lg:items-baseline lg:flex lg:px-8">
            <div>
              <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="lg:hidden ">
                  <button
                    className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <AiOutlineClose width={30} height={30}  />
                    ) : (
                      <HiMenu
                        
                        width={30}
                        height={30}
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
            <div
                className={`flex-1 justify-self-center pb-40 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                  navbar ? 'p-12 lg:p-0 block' : 'hidden'
                }`}
              >           
                <ul className="h-72 lg:h-auto items-baseline justify-center items-center lg:flex ">
                <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center">
                    <a href="#" onClick={() => setNavbar(!navbar)}>
                    <span className="text-gray-200 hover:text-green-400">Home</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center">
                    <a href="#about" onClick={() => setNavbar(!navbar)}>
                    <span className="hover:text-green-400">About</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center ">
                    <a href="#education" onClick={() => setNavbar(!navbar)}>
                    <span className="hover:text-green-400">Education</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center ">
                    <a href="#skills" onClick={() => setNavbar(!navbar)}>
                    <span className="hover:text-green-400">Skills</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center ">
                    <a href="#work" onClick={() => setNavbar(!navbar)}>
                    <span className=" hover:text-green-400">Work</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center hover:text-green-400 ">
                    <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    <span className=" hover:text-green-400"> Contact </span>
                    </a>
                  </li>
                  <button className="bg-gray-900 border text-xl  rounded w-20 px-6 h-10 text-center lg:mx-0 flex items-center justify-center mx-auto hover:bg-green-400">
                  Resume
                </button>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}