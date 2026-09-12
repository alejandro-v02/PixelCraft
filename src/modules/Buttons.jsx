function    Buttons(){
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
            </div>
        </div>
    )
}

export default Buttons;