function Cards(){
    return(
        <div>
            <h2>Cards</h2>

            <div className="flex flex-wrap gap-4 p-4">

                <div className="w-64 border border-gray-200 rounded-lg shadow-lg p-4">
                    <h3 className="font-bold text-lg mb-2">Basic Card</h3>
                    <p className="text-sm text-gray-600">Esta es una descripcion corta de la card, para ver como se acomoda el texto</p>
                </div>
            

            <div className="w-64 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img 
                    src="https://picsum.photos/300/160"
                    alt="Card Image"
                    className="w-full h-40 object-cover"
                    />
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Image Card</h3>
                    <p className="text-sm text-gray-500">
                        Descripción corta debajo de la imagen.
                    </p>
                </div>
            </div>

            <div className="w-64 border border-gray-200 rounded-lg shadow-lg p-4
            transition-all duration-500 hover:translate-y-3 hover:shadow-xl cursor-pointer">
                <h3 className="font-bold text-lg mb-2">Hover Lift Card</h3>
                <p className="text-sm text-gray-500">
                    Pasa el mouse por encima para ver el efecto.
                </p>
            </div>

            <div className="w-96 flex border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img
                    src="https://picsum.photos/200/200"
                    alt="Card image"
                    className="w-32 h-32 object-cover"
                />
                <div className="p-4 flex-1">
                    <h3 className="font-bold text-lg mb-2">Horizontal Card</h3>
                    <p className="text-sm text-gray-500">
                        El texto va al lado de la imagen, no debajo.
                    </p>
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default Cards
