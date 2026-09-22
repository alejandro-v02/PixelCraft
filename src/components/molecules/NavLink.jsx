import Icon from "../atoms/Icon";

function NavLink({iconName,label,onClick,isActive}){
    return(
        <button type="button" onClick={onClick} aria-current={isActive ? "page" : undefined} className={`
        flex items-center gap-2 p-2 w-full text-left
        cursor-pointer hover:bg-gray-200
        transition-colors duration-700 rounded-lg
        ${isActive ? "bg-gray-200 text-black":"hover:bg-gray-800"}`} >
        <Icon icon={iconName}/>
        <span>{label}</span>
        </button>
    );
}

export default NavLink;