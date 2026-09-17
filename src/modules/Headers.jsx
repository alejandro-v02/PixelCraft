function Headers(){
    return(
        <div>
            <div className="flex justify-center items-center text-center" >
            <h2 className="mt-4 mb-4 font-extrabold text-2xl">  Headers</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(192px,1fr))] gap-4 p-4">

                <div className="flex justify-between items-center border border-gray-200 w-100 rounded-lg shadow-lg px-4 py-3">
                    <h3 className="font-bold text-lg ml-3">App</h3>
                    <div className="flex gap-2">
                        <button className="px-2 py-1.5 text-sm text-gray-400 hover:text-gray-100 transition-colors duration-300 bg-black rounded-full cursor-pointer">
                            Login
                        </button>
                        <button className="px-2 py-1.5 text-sm text-gray-400 hover:text-gray-100 transition-colors duration-300 bg-black rounded-full cursor-pointer">
                            Sing Up
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Headers;