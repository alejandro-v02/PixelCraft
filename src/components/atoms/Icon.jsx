function Icon({icon:IconComponent, className="w-6 h-6"}){
    return(
        <IconComponent className={className}/>
    );
}

export default Icon;