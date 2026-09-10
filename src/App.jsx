import DashboardLayout from "./components/templates/DashboardLayout"

const modules=[
  {id:'home',icon:'🏠',name:'Inicio'},
  {id:'users',icon:'👥',name:'Usuarios'},
  {id:'reports',icon:'📊',name:'Reportes'},
]

function App() {
  return (
    <DashboardLayout modules={modules}/>
  )
}

export default App
