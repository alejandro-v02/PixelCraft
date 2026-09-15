function SearchBar(){
    return(
        <div>
            <div className="flex justify-center items-center text-center" >
            <h2 className="mt-4 mb-4 font-extrabold text-2xl">Search Bar</h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4">

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg" >
                    <h3 className="font-bold mt-2" >searchbar Clasic</h3>
                    <input type="text" className="mt-2 border pl-2 border-gray-200 p-1 rounded-full outline-none text-gray-500" 
                    placeholder="writing..." />
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold" >Focus Ring Search</h3>
                    <input type="text"
                placeholder="Search..."
                className="mt-2 border border-gray-300 p-1 pl-2 rounded-full outline-none
                focus:ring-4 focus:ring-gray-300 transition-shadow duration-700" />
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Animated Border Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    className="mt-2 border-2 border-gray-300 p-1 pl-2 rounded-full outline-none
                    focus:border-blue-600 transition-colors duration-700"/>
                </div>

            </div>
        </div>
    )
}

export default SearchBar