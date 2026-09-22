function Cards(){
    return(
        <div>
            <h2>Cards</h2>

            <div className="flex flex-wrap gap-4 p-4">
                <div className="w-64 border border-gray-200 rounded-lg shadow-lg p-4">
                    <h3 className="font-bold text-lg mb-2">Basic Card</h3>
                    <p className="text-sm text-gray-600">Esta es una descripcion corta de la card, para ver como se acomoda el texto</p>
                </div>
            </div>

        </div>
    )
}

export default Cards
