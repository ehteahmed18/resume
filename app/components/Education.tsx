import React from "react";


export default function Education() {
    return (
        <div id="education" className="flex flex-col py-20 ">
            <div className="flex ">
                <h1 className="m-auto text-2xl sm:text-4xl pt-2 font-semibold text-gray-200 ">
                    Education
                </h1>
            </div>
            <div className="w-8/12 m-auto my-10 border-y flex flex-col  ">
                <div className="flex p-3 my-3 justify-between items-center flex-wrap">
                    <div className="text-xl  w-full sm:w-1/4">2019-Present</div>
                    <div className="sm:pt-0 pt-4  text-xl font-semibold w-full sm:w-1/4">Usman Institute of Technology</div>
                    <div className="sm:pt-0 pt-4  text-xl text-gray-200 w-full sm:w-1/4">Bachelors of Electronic Engineering (BEEE)</div>
                </div>
                <div className="flex px-3 py-10 my-3 border-y justify-between items-center flex-wrap">
                    <div className=" text-xl w-full sm:w-1/4">2017-2019</div>
                    <div className="sm:pt-0 pt-4  text-xl font-semibold w-full sm:w-1/4">Shaheen Public College</div>
                    <div className="sm:pt-0 pt-4  text-xl text-gray-200 w-full sm:w-1/4">Intermediate</div>
                </div>
                <div className="flex px-3 py-8 my-3  justify-between items-center flex-wrap">
                    <div className="text-xl w-full sm:w-1/4">2004-2017</div>
                    <div className="sm:pt-0 pt-4  w-full sm:w-1/4 text-xl font-semibold">Shaheen Public School</div>
                    <div className="sm:pt-0 pt-4  text-xl text-gray-200 w-full sm:w-1/4">O-level (Cambridge)</div>
                </div>
            </div>
        </div>
    )
}