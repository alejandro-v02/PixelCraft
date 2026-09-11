import { useState } from "react";

function Users() {
const [selectRow,setSelectRow]=useState(null);
const [searchUser,setSearchUser]=useState("");

const [userData,setUserData]=useState([
  { id: 1, name: "Ana Torres", email: "ana@correo.com", role: "Admin" },
  { id: 2, name: "Carlos Ruiz", email: "carlos@correo.com", role: "Instructor" },
  { id: 3, name: "Laura Gómez", email: "laura@correo.com", role: "Aprendiz" },
])

function handleDelete(idDelete){
  setUserData(userData.filter((user)=> user.id !== idDelete))
}
const filteredUsers=userData.filter((user)=>
user.name.toLowerCase().includes(searchUser.toLowerCase()));

  return (
    <div>

      <div className="flex flex-row items-center justify-between gap-4 my-6 " >
        <h2 className=" text-3xl text-center font-bold mt-7">Gestión de Usuarios</h2>
        <input
        type="text"
        value={searchUser}
        onChange={(e)=>setSearchUser(e.target.value)}
        placeholder="Buscar usuario"
        className=" border border-gray-300 text-gray-600 rounded-lg p-2"
        />
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
          {filteredUsers.map((user) => {
            const isSelect=user.id=== selectRow;

            return(
            <tr key={user.id}
            onClick={()=>setSelectRow(user.id)}
            className={`hover:bg-gray-200 transition-colors duration-500 cursor-pointer
            ${isSelect ? "bg-blue-100" : ""}`} >

              <td className="p-2 text-center  " >{user.name}</td>
              <td className="p-2 text-center  " >{user.email}</td>
              <td className="p-2 text-center  " >{user.role}</td>
              <td>
                <button onClick={(e) => {e.stopPropagation(); handleDelete(user.id);}} >
                  Eliminar</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Users;