function Button({children, onClick}){
    return(
        <button onClick={onClick} className="px-4 py-2 bg-amber-700 text-amber-100
        rounded-lg hover:bg-amber-900 transition-colors duration-400 " >
            {children}
        </button>
    );
}

export default Button;