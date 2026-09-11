import DashboardLayout from "./components/templates/DashboardLayout"
import HomeIcon from "./assets/icons/Home.svg?react";
import UsersIcon from "./assets/icons/User.svg?react";
import ReportsIcon from "./assets/icons/Report.svg?react";

const modules=[
  {id:'home',icon:HomeIcon,name:'Inicio'},
  {id:'users',icon:UsersIcon,name:'Usuarios'},
  {id:'reports',icon:ReportsIcon,name:'Reportes'},
]

function App() {
  return (
    <DashboardLayout modules={modules}/>
  )
}

export default App
