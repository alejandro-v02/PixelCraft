function    Buttons(){
    return(
        <div>
            <div className="flex justify-center items-center text-center" >
            <h2 className="mt-4 mb-4 font-extrabold text-2xl">Buttons</h2>
            </div>
            <div>
                <div className="flex mt-2 flex-col shadow-lg w-48 h-24 items-center rounded-lg">
                    <h3 className="mt-2 font-bold">Solid Button</h3>
                    <button
                        className="rounded-full mt-2 bg-blue-600 text-white px-6 py-1.5
                        hover:bg-blue-700 transition-colors duration-500 cursor-pointer">
                        Send
                    </button>
                </div>

                <div className="flex flex-col mt-2 shadow-lg w-48 h-24 items-center rounded-lg">
                    <h3>Outline Button</h3>
                    <button
                    className="border border-blue-800 text-blue-600 hover:bg-blue-700 hover:text-white cursor-pointer
                    transition-colors duration-500 rounded-full px-4 py-1.5 "
                    >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;