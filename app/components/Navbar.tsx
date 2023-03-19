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
        <nav className="w-full 2md:fixed top-0 font-mono z-10 bg-zinc-900" >
          <div className="justify-between px-4 md:items-baseline md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden ">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
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
                className={`flex-1 justify-self-center pb-0 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >           
                <ul className="h-72 md:h-auto items-baseline justify-center md:flex ">
                <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center">
                    <a href="#home" onClick={() => setNavbar(!navbar)}>
                    <span className="text-white hover:text-green-400">Home</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center">
                    <a href="#about" onClick={() => setNavbar(!navbar)}>
                    <span className="text-white hover:text-green-400">About</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center ">
                    <a href="#education" onClick={() => setNavbar(!navbar)}>
                    <span className="text-white hover:text-green-400">Education</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center ">
                    <a href="#skills" onClick={() => setNavbar(!navbar)}>
                    <span className="text-white hover:text-green-400">Skills</span>
                    </a>
                  </li>
                  <li className="pb-6 text-xl text-lightest-slate py-2 md:px-6 text-center hover:text-green-400 ">
                    <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    <span className="text-white hover:text-green-400"> Contact </span>
                    </a>
                  </li>
                  <button className="bg-gray-900 border text-xl text-white rounded w-20 px-6 h-10 text-center md:mx-0 flex items-center justify-center mx-auto hover:bg-green-400">
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