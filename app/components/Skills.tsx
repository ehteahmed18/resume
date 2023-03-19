import React from "react";

export default function Skills() {
    return (
        <div id="skills" className="flex flex-wrap py-10 ">
            <div className="flex flex-col w-full  sm:w-1/2 ">
                <h1 className="m-auto text-2xl sm:text-4xl text-gray-200 pt-2 font-semibold">Technical Skills</h1>
                <div className="w-9/12 flex flex-col m-auto py-5">
                    <div className="flex text-sm sm:text-md justify-between pt-3 pb-2">
                        <h3>JavaScript</h3>
                        <h3>80%</h3>
                    </div>
                    <div className=" border  rounded-lg h-3 bg-gray-200 ">
                        <div className="flex h-full bg-green-400 rounded-lg" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex text-sm sm:text-md  justify-between pt-5 pb-2">
                        <h3>TypeScript</h3>
                        <h3>70%</h3>
                    </div>
                    <div className=" border  rounded-lg h-3 bg-gray-200 ">
                        <div className="flex h-full bg-green-400 rounded-lg" style={{ width: '70%' }}></div>
                    </div>
                    <div className="flex text-sm sm:text-md  justify-between pt-5 pb-2">
                        <h3>HTML</h3>
                        <h3>75%</h3>
                    </div>
                    <div className=" border  rounded-lg h-3 bg-gray-200 ">
                        <div className="flex h-full bg-green-400 rounded-lg" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex text-sm sm:text-md  justify-between pt-5 pb-2">
                        <h3>CSS</h3>
                        <h3>85%</h3>
                    </div>
                    <div className=" border  rounded-lg h-3 bg-gray-200 ">
                        <div className="flex h-full bg-green-400 rounded-lg" style={{ width: '85%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}