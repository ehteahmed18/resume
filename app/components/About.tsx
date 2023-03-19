import React from "react";
import Image from "next/image";

export default function About(){
    return(
        <div id="about" className="about flex flex-wrap-reverse py-5 sm:mt-10 mt-[500px] sm:py-48">
            <div className="fadeinimage flex w-full sm:w-1/2  justify-center mt-4 sm:mt-0  ">
                <Image src="/ab-img.jpg" alt="AboutMe" width="300" height="500" className=" lg:w-[400px] xl:w-[500px] lg:h-500" />
            </div>
            <div className="fadeinimage flex flex-col w-full sm:w-1/2 justify-center p-2 ">
                <h1 className="m-2 text-4xl font-semibold m-auto pb-4 sm:m-0 ">About Me</h1>
                <p className="m-2 text-xl">Hello, I am Ehtesham Ahmed , web-developer based on Pakistan. I have rich experience in web site design & building and customization. Also I am good at</p>
                <div className="flex flex-wrap mt-4  ">
                    <p className="border border-green-400 m-2 px-4 py-2 rounded-md">HTML</p>
                    <p className="border border-green-400 m-2 px-4 py-2 rounded-md">CSS</p>
                    <p className="border border-green-400 m-2 px-4 py-2 rounded-md">JavaScript</p>
                    <p className="border border-green-400 m-2 px-4 py-2 rounded-md">React</p>
                    <p className="border border-green-400 m-2 px-4 py-2 rounded-md ">Tailwind CSS</p>
                </div>
            </div>
        </div>
    )
}