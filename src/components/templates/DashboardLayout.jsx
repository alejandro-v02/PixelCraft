import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";

function DashboardLayout({modules}){
    const [selectedModuleId,setSelectedModuleId]=useState(modules[0].id);

    return(
        <>
        <Sidebar
        modules={modules}
        onSelectModule={setSelectedModuleId}
        />
        <div>
            <Header title={"Mi App"} />
            <p>Modulo seleccionado: {selectedModuleId}</p>
        </div>
        </>
    );
}

export default DashboardLayout;