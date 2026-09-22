import DashboardLayout from "./components/templates/DashboardLayout"
import HomeIcon from "./assets/icons/Home.svg?react";
import UsersIcon from "./assets/icons/User.svg?react";
import ButtonsIcon from "./assets/icons/button.svg?react";
import SearchIcon from "./assets/icons/search-bar.svg?react";
import CardsIcon from "./assets/icons/report.svg?react";

const modules=[
  {id:'home',icon:HomeIcon,name:'Inicio'},
  {id:'users',icon:UsersIcon,name:'Usuarios'},
  {id:'buttons',icon:ButtonsIcon,name:'Buttons'},
  {id:'searchbar',icon:SearchIcon,name:'Search Bar'},
  {id:'headers',icon:HomeIcon,name:'Headers'},
  {id:'cards',icon:CardsIcon,name:'Cards'},
]

function App() {
  return (
    <DashboardLayout modules={modules}/>
  )
}

export default App
