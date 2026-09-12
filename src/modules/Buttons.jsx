import { useState } from "react";

function  Buttons(){
    const [isLoading,setIsLoading]= useState(false);
    const [isLiked, setIsLiked]= useState(false);
    return(
        <div>
            <div className="flex justify-center items-center text-center" >
            <h2 className="mt-4 mb-4 font-extrabold text-2xl">Buttons</h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4" >
                <div className="flex mt-2 flex-col m-2 shadow-lg w-48 h-24 items-center rounded-lg border border-gray-200">
                    <h3 className="mt-2 font-bold">Solid Button</h3>
                    <button
                        className="rounded-full mt-2 bg-blue-600 text-white px-6 py-1.5
                        hover:bg-blue-800 transition-colors duration-500 cursor-pointer">
                        Send
                    </button>
                </div>

                <div className="flex flex-col m-2 shadow-lg w-48 h-24 items-center rounded-lg border border-gray-200">
                    <h3 className="mt-2 font-bold">Outline Button</h3>
                    <button
                    className="mt-2 border border-blue-800 text-blue-600 hover:bg-blue-700 hover:text-white cursor-pointer 
                    transition-colors duration-500 rounded-full px-6 py-1.5 "
                    >Send</button>
                </div>

                <div className="flex flex-col m-2 shadow-lg w-48 h-24 items-center rounded-lg border border-gray-200" >
                    <h3 className="mt-2 font-bold" >Gradient Button</h3>
                    <button
                    className="text-white px-6 py-1.5 mt-2 rounded-full transition-colors
                    duration-500 bg-gradient-to-r from-purple-600 to-blue-600
                    hover:from-purple-700 hover:to-blue-700 cursor-pointer"
                    >Send</button>
                </div>

                <div className="flex flex-col m-2 shadow-lg w-48 h-24 bg-gradient-to-br 
                from-indigo-500 to-purple-600  rounded-lg items-center" >
                    <h3 className="mt-2 font-bold text-white" >Glass Button</h3>
                    <button className=" text-white px-6 py-1.5 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full
                    hover:bg-white/20 transition-colors duration-500 cursor-pointer"
                    >Send</button>
                </div>

                <div className="flex flex-col m-2 shadow-lg w-48 h-24 items-center rounded-lg border border-gray-200" >
                    <h3 className="mt-2 font-bold" >Button 3D</h3>
                    <button className="bg-emerald-500 mt-2 text-white px-4 py-1 rounded-full cursor-pointer
                    border-b-4 border-emerald-700 active:border-b-0 active:traslate-y-1"
                    >Send</button>
                </div>

                <div className="bg-gray-950  mt-2 rounded-lg items-center flex flex-col w-48 h-24" >
                    <h3 className="mt-2 font-bold text-white" >Neon Button</h3>
                    <button className="text-cyan-400 mt-2 px-4 py-1.5 rounded-full cursor-pointer
                    bg-transparent border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.9)] transition-all duration-500"
                    >Send</button>
                </div>

                <div className="flex flex-col mt-2 w-48 h-24 items-center shadow-lg rounded-lg border border-gray-200">
                    <h3 className="mt-2 font-bold" >Lift Buttonn</h3>
                    <button className="mt-2 px-4 py-1.5 bg-indigo-600 text-white rounded-full cursor-pointer
                    hover:-traslate-y-1 hover:scale-110 transition-all duration-500 shadow-sm hover:shadow-lg"
                    >Send</button>
                </div>

                <div className="flex flex-col mt-2 w-48 h-24 items-center shadow-lg rounded-lg border border-gray-200" >
                    <h3 className="mt-2 font-bold" >Loading Button</h3>
                    <button onClick={()=> setIsLoading(true)}
                    className="flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full cursor-pointer
                    bg-blue-600 text-white"
                    >{isLoading && (
                        <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" ></div>
                    )}
                    Send</button>
                </div>

                <div className="flex flex-col mt-2 w-48 h-24 items-center shadow-lg rounded-lg border border-gray-200" >
                    <h3 className="mt-2 font-bold" >Badge Button</h3>
                    <button className="bg-gray-700 text-white mt-2 px-4 py-1.5 rounded-full cursor-pointer
                    relative "
                    >Send
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full animate-pulse border-2 border-white"></span>
                    </button>
                </div>

                <div className="flex flex-col mt-2 w-48 h-24 items-center shadow-lg rounded-lg border border-gray-200" >
                    <h3 className="mt-2 font-bold" >Like Button</h3>
                    <button onClick={()=> setIsLiked(!isLiked)}
                    className={`mt-2 px-4 py-1.5 rounded-full cursor-pointer transition-colors duration-500
                    ${isLiked ? "bg-gradient-to-r from-amber-500 to-pink-600 text-white" : "bg-gray-200 text-gray-800"}`}
                    >♥ Like</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;