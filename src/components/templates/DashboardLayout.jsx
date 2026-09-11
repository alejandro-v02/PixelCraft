import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";

import Home from "../../modules/Home";
import Users from "../../modules/Users";
import Reports from "../../modules/Reports";

function DashboardLayout({modules}){
    const [selectedModuleId,setSelectedModuleId]=useState(modules[0].id);

    const moduleComponent={
        home:Home,
        users:Users,
        reports:Reports
    };

    const SelectedComponent=moduleComponent[selectedModuleId];

    return(
        <div className="flex gap-4" >
        <Sidebar
        modules={modules}
        onSelectModule={setSelectedModuleId}
        activeModule={selectedModuleId}
        />
        <div className="flex-1 p-4" >
            <Header title={"Mi App"} />
            <SelectedComponent/>
        </div>
        </div>
    );
}

export default DashboardLayout;