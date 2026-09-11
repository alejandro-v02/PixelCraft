import Icon from "../atoms/Icon";

function NavLink({iconName,label,onClick,isActive}){
    return(
        <div onClick={onClick} className={`
        flex items-center gap-2 p-2
        cursor-pointer hover:bg-gray-500 
        transition-colors duration-700 rounded-lg
        ${isActive ? "bg-blue-600":"hover:bg-gray-700"}`} >
        <Icon name={iconName}/>
        <span>{label}</span>
        </div>
    );
}

export default NavLink;