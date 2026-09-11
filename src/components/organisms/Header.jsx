function Header({title}){
    return(
        <header className="border-b border-gray-500" >
            <h1 className="text-2xl font-bold p-4" >{title}</h1>
        </header>
    )
}

export default Header;