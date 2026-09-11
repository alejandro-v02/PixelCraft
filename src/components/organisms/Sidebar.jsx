import NavLink from "../molecules/NavLink";

function Sidebar({modules,onSelectModule,activeModule}){
    return(
        <div className="flex flex-col gap-4 w-64 h-screen bg-black text-white p-4">
        {modules.map((module)=>{
            const isActive =module.id===activeModule;
            return (
            <NavLink
            key={module.id}
            iconName={module.icon}
            label={module.name}
            onClick={()=> onSelectModule(module.id)}
            isActive={isActive}
            />
            );
        })}
        </div>
    )
}

export default Sidebar