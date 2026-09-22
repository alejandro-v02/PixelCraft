import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";

import Home from "../../modules/Home";
import Users from "../../modules/Users";
import Buttons from "../../modules/Buttons";
import SearchBar from '../../modules/Search-bar';
import Headers from "../../modules/Headers";

function DashboardLayout({modules}){
    const [selectedModuleId,setSelectedModuleId]=useState(modules[0].id);

    const moduleComponent={
        home:Home,
        users:Users,
        buttons:Buttons,
        searchbar:SearchBar,
        headers:Headers,
    };

    const SelectedComponent=moduleComponent[selectedModuleId];

    return(
        <div className="flex h-screen overflow-hidden" >
        <Sidebar
        modules={modules}
        onSelectModule={setSelectedModuleId}
        activeModule={selectedModuleId}
        />
        <div className="flex-1 flex flex-col min-w-0 h-screen" >
            <Header title={"Mi App"} />
            <div className="flex-1 overflow-y-auto p-4">
                <SelectedComponent/>
            </div>
        </div>
        </div>
    );
}

export default DashboardLayout;