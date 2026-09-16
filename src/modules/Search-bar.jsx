import { useState } from "react"

function SearchBar(){
    const [searchText,setSearchText]=useState(""); //Character Count Search
    const [query,setQuery]=useState("");
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

                <di className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Gradient Border Search</h3>
                    <div className="mt-2 bg-gradient-to-r from-purple-500 to-pink-700 p-1 rounded-full
                    focus-within:from-blue-600 focus-within:to-cyan-500 transition-colors duration-700">
                        <input type="text"
                        placeholder="Search..."
                        className="bg-white p-1 pl-2 rounded-full outline-none"/>
                    </div>
                </di>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Underline Search</h3>
                    <div className="relative mt-2 focus-within:[&>span]:scale-x-100">
                        <input type="text"
                        placeholder="Search..."
                        className="border-b-2 border-gray-300 bg-transparent p-1 pl-2 outline-none"/>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600
                        scale-x-0 origin-left transition-transform duration-300"></span>
                    </div>
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Expanding Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    className="border border-gray-200 p-1 pl-2 rounded-full outline-none w-24
                    focus:w-48 transition-all duration-500 focus:shadow-lg"/>
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Character Count Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e)=> setSearchText(e.target.value)}
                    className="border border-gray-200 p-1 pl-2 rounded-full outline-none
                    "/>
                    <span className="text-xs text-gray-400 mt-1">{searchText.length} caracteres</span>
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">No Result Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    className="border border-gray-200 p-1 pl-2 rounded-full outline-none"/>
                    {query.length>0 && query.toLocaleLowerCase() !== "laptop" && (
                        <p className="text-[12px] text-red-500 mt-1">
                            Sin resultados para "{query}"</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SearchBar