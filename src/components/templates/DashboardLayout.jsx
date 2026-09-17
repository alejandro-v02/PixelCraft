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