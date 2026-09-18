import { useState } from "react";

function Headers(){
    //header con dropdown de usuario
    const [menuOpen,setMenuOpen] = useState(false);
    //header con notificaciones
    const [notiOpen,setNotiOpen]=useState(false);
    //header con tabs de navegación
    const [activeTab,setActiveTab] = useState("inicio");
    //modo oscuro a claro
    const [darkMode,setDarkMode] = useState(false);
    //menú hamburguesa (mobile)
    const [mobileMenuOpen,setMobileMenuOpen]= useState(false);

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

                <div className="flex justify-between px-4 py-1.5 items-center border border-gray-200 rounded-lg shadow-lg relative">
                    <h3 className="font-bold text-[16px]" >App</h3>
                    <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center w-8 h-8 rounded-full bg-black text-white justify-center font-bold gap-2 cursor-pointer">
                        A</button>
                    {menuOpen && (
                        <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-500" >Perfil</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-500" >Configuracion</a>
                            <a href="#" className="block px-4 py-2 text-sm  hover:bg-gray-100 transition-colors duration-500" >Cerrar Sesion</a>
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center border border-gray-200  rounded-lg shadow-lg px-4 py-3 relative">
                    <h3 className="font-bold">App</h3>
                    <button
                    onClick={() => setNotiOpen(!notiOpen)}
                    className="relative cursor-pointer shadow-lg rounded-full p-1 bg-black">
                        🔔
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse "></span>
                    </button>
                    {notiOpen && (
                        <div className="absolute top-full right-0 mt-2 w-56 border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-4 py-2 text-sm font-bold border-b border-gray-100">Notificaciones</div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-500">Nuevo Mensaje de Ana</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-500">Tu pedido fue enviado</a>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-500">3 personas te mencionaron</a>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-6 border border-gray-200 rounded-lg shadow-lg px-4 py-3">
                    <h3 className="font-bold text-lg">App</h3>
                    <button
                    onClick={()=> setActiveTab("inicio")}
                    className={`text-sm pb-1 cursor-pointer transition-colors duration-500
                    ${activeTab === "inicio" ? "text-black font-bold border-b-2 border-black" : "text-gray-400 border-transparent"}`}>
                        Inicio
                    </button>
                    <button
                    onClick={()=> setActiveTab("productos")}
                    className={`text-sm pb-1 cursor-pointer transition-colors duration-500
                    ${activeTab === "productos" ? "text-black font-bold border-b-2 border-black" : "text-gray-400 border-transparent"}`}>
                        Productos
                    </button>
                    <button
                    onClick={()=> setActiveTab("contacto")}
                    className={`text-sm pb-1 cursor-pointer transition-colors duration-500
                    ${activeTab === "contacto" ? "text-black font-bold border-b-2 border-black" : "text-gray-400 border-transparent"}`}>
                        Contacto
                    </button>
                </div>

                <div className={`flex justify-between items-center rounded-lg shadow-lg px-4 py-3 border transition-colors duration-300
                    ${darkMode ? "bg-gray-900" : "bg-white border border-gray-200"}`}>
                    <h3 className={`font-bold text-lg transition-colors duration-300
                        ${darkMode ? "text-white" : "text-black"}`}>
                            App
                        </h3>
                    <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl">
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </div>

                <div className="flex justify-between items-center border border-gray-200 rounded-lg shadow-lg px-4 py-3">
                    <h3 className="font-bold  text-lg">App</h3>
                    <button
                    onClick={()=> setMobileMenuOpen(true)}
                    className="cursor-pointer text-2xl">
                        ☰
                    </button>
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
                            <div className="w-64 h-full bg-white p-6">
                                <button
                                onClick={()=> setMobileMenuOpen(false)}
                                className="text-2xl cursor-pointer mb-6">
                                    ✕
                                </button>
                                <nav className="flex flex-col gap-4">
                                    <a href="#" className="text-gray-700 hover:text-black">Inicio</a>
                                    <a href="#" className="text-gray-700 hover:text-black">Productos</a>
                                    <a href="#" className="text-gray-700 hover:text-black">Contacto</a>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Headers;