import React from "react";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn,FaEnvelope,FaPhoneAlt,FaLocationArrow,FaMapMarker } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Home() {
    return (
        <div  className=" about flex flex-wrap h-[500px] lg:pt-20 sm:pt-10">
            <div className=" fadeinimage flex flex-col  items-start pl-5  sm:pt-20 pb-10 w-full sm:w-6/12 mt-12 lg:pl-28 md:pl-10 ">
                <div className=" px-5 py-2 mb-3 rounded-t-xl rounded-br-xl bg-green-500">Hello I am</div>
                <h1 className="text-5xl font-semibold lg:text-6xl ">Ehtesham Ahmed</h1>
                <p className="mt-4 text-3xl lg:text-4xl">Front-End Developer</p>
                <ul className="mt-8">
                    <li className="flex "><FaEnvelope className="h-7 w-7 p-1 hover:text-green-400" /> <p className=" pl-4 lg:text-xl">ehtexhamahmed2000@gmail.com</p></li>
                    <li className="flex pt-7"><FaPhoneAlt className="h-7 w-7 p-1 hover:text-green-400" /> <p className="pl-4 lg:text-xl">+923232388551</p></li>
                    <li className="flex pt-7"><FaMapMarker className="h-7 w-7 p-1 hover:text-green-400" /> <p className="pl-4 lg:text-xl">Okhai Complex,Karachi,Pakistan</p></li>
                </ul>
                <div className="flex justify-center pl-5 pt-6 sm:py-4,pl-7  ">
                    <a href="#" className="hover:bg-green-400"><FaLinkedinIn className="w-6 h-6 m-4 "/></a>
                    <a href="#" className="hover:bg-green-400"><FiTwitter className="w-6 h-6 m-4"/></a>
                    <a href="#" className="hover:bg-green-400"><FiGithub className="w-6 h-6 m-4"/></a>
                    <a href="#" className="hover:bg-green-400"><AiOutlineInstagram className="w-6 h-6 m-4 "/></a>
                </div>
            </div>
            <div className="fadeinimage w-full sm:w-1/2 flex items-center justify-center xl:pr-20 ">
                <Image src="/image2.jpg" alt="" width={"200"} height="200" className="m-20 rounded-full ring-[20px] ring-black ring-offset-[15px] ring-offset-zinc-900 lg:w-[300px] "
                />
            </div>
        </div>
    )
}