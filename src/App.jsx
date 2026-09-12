import DashboardLayout from "./components/templates/DashboardLayout"
import HomeIcon from "./assets/icons/Home.svg?react";
import UsersIcon from "./assets/icons/User.svg?react";
import ButtonsIcon from "./assets/icons/button.svg?react";

const modules=[
  {id:'home',icon:HomeIcon,name:'Inicio'},
  {id:'users',icon:UsersIcon,name:'Usuarios'},
  {id:'buttons',icon:ButtonsIcon,name:'Buttons'},
]

function App() {
  return (
    <DashboardLayout modules={modules}/>
  )
}

export default App
