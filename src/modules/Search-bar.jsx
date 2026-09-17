import { useState } from "react"

function SearchBar(){
    const [searchText,setSearchText]=useState(""); //Character Count Search
    const [query,setQuery]=useState("");//No Result Search
    //History Search
    const [history,setHistory]=useState([]);
    const [term,setTerm]=useState("");
    //filtrar una lista y mostrar un dropdown de sugerencias
    const opciones=["React", "Angular", "Vue", "Svelte", "NestJs", "FastAPI", "Django", "Laravel"]
    const [autocomplete,setAutocompleted]=useState("");
    const filtradas= opciones.filter(op =>
        op.toLowerCase().includes(autocomplete.toLowerCase())
    );

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

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Gradient Border Search</h3>
                    <div className="mt-2 bg-gradient-to-r from-purple-500 to-pink-700 p-1 rounded-full
                    focus-within:from-blue-600 focus-within:to-cyan-500 transition-colors duration-700">
                        <input type="text"
                        placeholder="Search..."
                        className="bg-white p-1 pl-2 rounded-full outline-none"/>
                    </div>
                </div>

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
                    className="mt-2 border border-gray-400 p-1 pl-2 rounded-full outline-none w-24
                    focus:w-48 transition-all duration-500 focus:shadow-lg"/>
                </div>

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Character Count Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e)=> setSearchText(e.target.value)}
                    className="mt-1.5 border border-gray-200 p-1 pl-2 rounded-full outline-none
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

                <div className="flex flex-col border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Search History</h3>
                    <input type="text"
                    placeholder="Search..."
                    value={term}
                    onChange={(e)=> setTerm(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter" && term.trim() !== ""){
                            setHistory([...history,term])
                            setTerm("");
                        }
                    }}
                    className="border border-gray-200 p-1 pl-2 rounded-full outline-none"/>
                    <div>
                        {history.map((item,index)=>(
                            <span
                            key={index}
                            className="text-[12px]  shadow-lg bg-gray-100 text-gray-700 px-1 py-0.3 rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col relative border border-gray-200 w-58 h-24 items-center rounded-lg shadow-lg">
                    <h3 className="mt-2 font-bold">Search Autocomplete</h3>
                    <input type="text"
                    placeholder="Search..."
                    value={autocomplete}
                    onChange={(e)=> setAutocompleted(e.target.value)}
                    className="mt-2 border border-gray-300 p-1 pl-2 rounded-full outline-none w-48"
                    />
                    {autocomplete.length > 0 && filtradas.length > 0 && (
                        <div className="absolute top-20 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-32 overflow-y-auto">
                            {filtradas.map((item,index)=>(
                                <div
                                key={index}
                                onClick={() =>setAutocompleted(item)}
                                className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    {item}</div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center bg-gray-200 border border-gray-300 rounded-lg w-58 h-24 " >
                    <h3 className="mt-2 font-bold text-gray-600" >Neumorphism Search</h3>
                    <input type="text"
                    placeholder="Search..."
                    className="mt-2 text-gray-600 bg-gray-200 p-1 pl-2 rounded-full outline-none
                    shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"/>
                </div>

            </div>
        </div>
    )
}

export default SearchBar