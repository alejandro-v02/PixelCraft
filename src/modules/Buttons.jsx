function    Buttons(){
    return(
        <div>
            <h2 className="mt-4 mb-4">Buttons</h2>
            <div>
                <div className="flex flex-col shadow-lg w-48 h-24 items-center rounded-lg">
                    <h3 className="mt-2">Solid Button</h3>
                    <button
                        className="rounded-full mt-2 bg-blue-600 text-white px-6 py-1.5
                        hover:bg-blue-700 transition-colors duration-500 cursor-pointer">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;