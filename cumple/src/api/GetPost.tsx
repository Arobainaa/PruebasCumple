import axios from "axios";
import React from "react";

const baseURL = "https://location.laberit.com/locationback/employee";

export interface Employee {
  idemployers: number;
  name: string;
  surname: string;
  mail: string;
  phone: number;
  description: string;
  photo: string;
  customer: string | null;
  start: string | null;
  end: string | null;
  idlocations: number;
  workstation: string;
  savedate: string;
}

export default function App() {
  const [employees, setEmployees] = React.useState<Employee[] | null>(null);

  React.useEffect(() => {
    axios
      .get<Employee[]>(baseURL)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  if (!employees) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Lista de empleados</h1>
      {employees.map((emp) => (
        <div key={emp.idlocations} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
          <p><strong>ID:</strong> {emp.idlocations}</p>
          <p><strong>Nombre:</strong> {emp.name} {emp.surname}</p>
          <p><strong>Fecha:</strong> {new Date(emp.savedate).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
