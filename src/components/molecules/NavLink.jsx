import Icon from "../atoms/Icon";

function NavLink({iconName,label,onClick}){
    return(
        <div onClick={onClick}>
        <Icon name={iconName}/>
        <span>{label}</span>
        </div>
    );
}

export default NavLink;