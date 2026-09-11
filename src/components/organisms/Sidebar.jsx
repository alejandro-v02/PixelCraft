import NavLink from "../molecules/NavLink";

function Sidebar({modules,onSelectModule}){
    return(
        <div className="flex flex-col gap-4 w-64 h-screen bg-black text-white p-4">
        {modules.map((module)=>(
            <NavLink
            key={module.id}
            iconName={module.icon}
            label={module.name}
            onClick={()=> onSelectModule(module.id)}
            />
        ))}
        </div>
    )
}

export default Sidebar