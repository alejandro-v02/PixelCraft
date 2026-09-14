import { useState } from "react";

function Users() {
const [selectRow,setSelectRow]=useState(null);
const [searchUser,setSearchUser]=useState("");
const [newUser,setNewUser]=useState({name: "", email:"", role:""});

const [userData,setUserData]=useState([
  { id: 1, name: "Ana Torres", email: "ana@correo.com", role: "Admin" },
  { id: 2, name: "Carlos Ruiz", email: "carlos@correo.com", role: "Instructor" },
  { id: 3, name: "Laura Gómez", email: "laura@correo.com", role: "Aprendiz" },
])

const filteredUsers=userData.filter((user)=>
user.name.toLowerCase().includes(searchUser.toLowerCase()));

const [currentPage,setCurrentPage]=useState(1);
const itemsperPage=2;
const totalPages=Math.ceil(filteredUsers.length / itemsperPage);
const startIndex =(currentPage -1)* itemsperPage;
const paginatedUsers= filteredUsers.slice(startIndex, startIndex + itemsperPage);


function handleDelete(idDelete){
  setUserData(userData.filter((user)=> user.id !== idDelete))
}

function handleAddUser(){
  if(!newUser.name.trim() || !newUser.email.trim()) return;
  const newId= userData.length > 0 ? Math.max(...userData.map(u => u.id)) + 1 :1;
  setUserData([...userData, {id:newId, ...newUser}]);
  setNewUser({ name: "", email:"", role:""});
}

function handleSearchChange(e){
  setSearchUser(e.target.value);
  setCurrentPage(1);
}    

  return (
    <div>

      <div className="flex flex-row items-center justify-between gap-4 my-6 " >
        <h2 className=" text-3xl text-center font-bold mt-7">Gestión de Usuarios</h2>
        <input
        type="text"
        value={searchUser}
        onChange={handleSearchChange}
        placeholder="Buscar usuario"
        className=" border border-gray-300 text-gray-600 rounded-lg p-2"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-500" >Nuevo Usuario</h2>
        <input type="text"
          value={newUser.name}
          required
          onChange={(e)=> setNewUser({...newUser,name:e.target.value})}
          placeholder="Nombre..."
          className="border border-gray-300 rounded-lg p-1.5 m-1"  />
        <input type="email"
          value={newUser.email}
          required
          onChange={(e)=> setNewUser({...newUser,email:e.target.value})}
          placeholder="Correo electronico..."
          className="border border-gray-300 rounded-lg p-1.5 m-1"  />
        <input type="text"
          value={newUser.role}
          required
          onChange={(e)=> setNewUser({...newUser,role: e.target.value})}
          placeholder="Rol..."
          className="border border-gray-300 rounded-lg p-1.5 m-1" />
          <button 
          onClick={handleAddUser}
          className="bg-black text-white p-1.5 rounded-2xl cursor-pointer
          transition-transform duration-150 active:scale-90 hover:scale-100" >
            Registrar</button>
      </div>

      <div className="rounded-lg overflow-hidden mt-4 border border-gray-300 " >
      <table className="w-full  border-collapse rounded-lg " >
        <thead className="bg-gray-300" >
          <tr>
            <th className="text-center p-2" >Nombre</th>
            <th className="text-center p-2" >Email</th>
            <th className="text-center p-2" >Rol</th>
            <th className="text-center p-2" >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-400">
                No se encontraron usuarios
              </td>
            </tr>
          )}
          {paginatedUsers.map((user) => {
            const isSelect=user.id=== selectRow;

            return(
            <tr key={user.id}
            onClick={()=>setSelectRow(user.id)}
            className={`hover:bg-gray-200 transition-colors duration-500
            ${isSelect ? "bg-gray-200" : ""}`} >

              <td className="p-2 text-center  " >{user.name}</td>
              <td className="p-2 text-center  " >{user.email}</td>
              <td className="p-2 text-center  " >{user.role}</td>
              <td className="text-center p-2" >
                <button onClick={(e) => {e.stopPropagation(); handleDelete(user.id);}}
                  className="bg-red-600 hover:bg-red-700 rounded-full p-2 text-white text-xs font-semibold px-3
                  transition-transform duration-250 active:scale-90 hover:scale-100 cursor-pointer">
                  Eliminar</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="px-3 py-1 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          <span>Página {currentPage} de {totalPages}</span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="px-3 py-1 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;