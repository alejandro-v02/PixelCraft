import NavLink from "../molecules/NavLink";

function Sidebar({modules,onSelectModule}){
    return(
        <>
        {modules.map((module)=>(
            <NavLink
            key={module.id}
            iconName={module.icon}
            label={module.name}
            onClick={()=> onSelectModule(module.id)}
            />
        ))}
        </>
    )
}

export default Sidebar