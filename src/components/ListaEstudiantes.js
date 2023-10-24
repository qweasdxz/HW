import React from "react";

const listaEstudiantes = [
  {
  nombre: "Jose",
  apellido: "Perez",
  edad: 20,
  },
  {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 20,
  },
  {
  nombre: "Luis",
  apellido: "Pérez",
  edad: 20,
  },
  {
  nombre: "Cristian",
  apellido: "Pérez",
  edad: 20,
  },
  {
  nombre: "Fiorella",
  apellido: "Pérez",
  edad: 20,
  },
  {
  nombre: "Yensy",
  apellido: "Pérez",
  edad: 20,
  },
  ];

  export const ListaEstudiantes = () => {
 
    return (
      <ul>
        {listaEstudiantes.map(function (estudiante, index) {
          return (
            <li key={`${estudiante.nombre}-${index}`}>
              <p>
                {estudiante.nombre} {estudiante.apellido} {estudiante.edad}
              </p>
            </li>
          );
        })}
      </ul>
    );
  };