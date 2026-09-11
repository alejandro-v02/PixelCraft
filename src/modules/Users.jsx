const usersData = [
  { id: 1, name: "Ana Torres", email: "ana@correo.com", role: "Admin" },
  { id: 2, name: "Carlos Ruiz", email: "carlos@correo.com", role: "Instructor" },
  { id: 3, name: "Laura Gómez", email: "laura@correo.com", role: "Aprendiz" },
];

function Users() {
  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;