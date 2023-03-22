import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub, FiLink } from "react-icons/fi";
import Image from "next/image";


export default function Work() {
    return (
        <div id="work" className="flex flex-col py-10 ">
            <div className="flex justify-center w-full pt-10 sm:pt-20 ">
                <h1 className="text-2xl sm:text-4xl pt-2 font-semibold text-gray-200 ">Work I Have Done</h1>
            </div>
            <div className="flex flex-wrap mt-5 sm:mt-10">
                <div className="flex p-5 sm:py-10 w-full 2md:w-7/12 justify-start lg:justify-end ">
                    <Image src="/pnv.png" alt="" width="700" height="500" className="opacity-50  hover:opacity-100 " />
                </div>
                <div className="flex flex-col items-center 2md:items-end w-full 2md:w-4/12 ">
                    <div className="text-xl font-semibold text-green-400 lg:mt-12">Featured Project</div>
                    <div className="sm:text-3xl text-xl  text-gray-200 font-bold py-2">Panaverse Dao Website</div>
                    <div className="border border-gray-200 text-lg p-6  bg-zinc-900 w-[300px] sm:w-[600px] z-[1] mt-4">A panaverse dao website made as a project using latest version of Next.JS, Chakra UI. Contain all information about panaverse including offered courses and the syllabus.</div>
                    <div className="flex text-gray-200">
                        <p className="p-2 m-2 sm:p-2 sm:text-lg border-b">Next JS</p>
                        <p className="p-2 m-2 sm:p-2 sm:text-lg border-b">Chakra UI</p>
                    </div>
                    <div className="flex">
                        <a href="https://github.com/ehteahmed18/panaverse_website" className="px-3 mx-2 text-2xl pt-3 text-gray-200"><FiGithub /></a>
                        <a href="https://panaverse-website-ehtexhamahmed2000-gmailcom.vercel.app/" className="px-3 mx-2 text-2xl pt-3 text-gray-200 "><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap-reverse justify-end mt-20">
                <div className="flex  flex-col items-center 2md:items-start w-full 2md:w-4/12 ">
                    <div className="text-xl font-semibold text-green-400 lg:mt-12">Featured Project</div>
                    <div className="sm:text-3xl text-xl  text-gray-200 font-bold py-2">Pricing UI</div>
                    <div className="border border-gray-200 text-lg p-6  bg-zinc-900 w-[300px] sm:w-[600px] z-[1] mt-4">A simple pricing UI model design created using Next JS and Chakra UI. It can be used for business purposes or to deal with new clients/customers.</div>
                    <div className="flex text-gray-200">
                        <p className="p-2 m-2 sm:p-2 sm:text-lg border-b">Next JS</p>
                        <p className="p-2 m-2 sm:p-2 sm:text-lg border-b">Chakra UI</p>
                    </div>
                    <div className="flex">
                        <a href="https://github.com/ehteahmed18/project00_pricing_UI" className="px-3 mx-2 text-2xl pt-3 text-gray-200"><FiGithub /></a>
                        <a href="https://project00-pricing-ui.vercel.app/" className="px-3 mx-2 text-2xl pt-3 text-gray-200"><FaExternalLinkAlt /></a>
                    </div>
                </div>
                <div className="flex p-5 sm:py-10 w-full 2md:w-7/12 justify-center lg:justify-start ">
                    <Image src="/pricing.png" alt="" width="700" height="500" className="opacity-50  hover:opacity-100 " />
                </div>
            </div>
        </div>
    )
}