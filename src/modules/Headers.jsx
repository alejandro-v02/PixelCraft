function Headers(){
    return(
        <div>
            <div className="flex justify-center items-center text-center" >
            <h2 className="mt-4 mb-4 font-extrabold text-2xl">  Headers</h2>
            </div>
            <div className="flex flex-col gap-4 p-4">

                <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-lg px-4 py-3">
                    <h3 className="font-bold text-lg ">App</h3>
                    <div className="flex gap-2">
                        <button className="px-2 py-1.5 text-sm text-gray-400 hover:text-gray-100 transition-colors duration-300 cursor-pointer bg-black rounded-full">
                            Login
                        </button>
                        <button className="px-2 py-1.5 text-sm text-gray-400 hover:text-gray-100 transition-colors duration-300 cursor-pointer bg-black rounded-full">
                            Sing Up
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center border border-gray-200 rounded-lg shadow-lg px-4 py-3 ">
                    <h3 className="font-bold text-lg">App</h3>
                    <nav className="flex justify-center gap-4 text-sm text-gray-500">
                        <a href="#" className=" hover:text-black transition-colors duration-500">Inicio</a>
                        <a href="#" className=" hover:text-black transition-colors duration-500">Productos</a>
                        <a href="#" className=" hover:text-black transition-colors duration-500">Contacto</a>
                    </nav>
                    <div className="flex justify-end">
                        <button className="px-3 py-1.5  text-[14px] bg-black text-white rounded-full cursor-pointer
                        hover:bg-blue-600 transition-colors duration-500">
                            Sing Up
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center border border-gray-200 shadow-lg rounded-lg px-4 py-3">
                    <h3 className="font-bold">App</h3>
                    <div className="flex justify-center">
                        <input type="text"
                        placeholder="Search..."
                        className="border border-gray-200 p-1 rounded-full pl-2 w-30 text-gray-600 outline-none
                        focus:w-48 focus:shadow-lg transition-all duration-500"/>
                    </div>
                    <div className="flex justify-end">
                        <button className="px-3 py-1 bg-black text-white rounded-full cursor-pointer
                        hover:bg-blue-600 transition-colors duration-500">
                            Profile</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Headers;