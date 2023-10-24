import React from 'react';

export class ListaEstudiantesClases extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      listaEstudiantes: [
        { nombre: 'José', apellido: 'Perez', edad: 20 },
        { nombre: 'Juan', apellido: 'Perez', edad: 20 },
        { nombre: 'Luis', apellido: 'Perez', edad: 20 },
        { nombre: 'Cristian', apellido: 'Perez', edad: 20 },
        { nombre: 'Fiorella', apellido: 'Perez', edad: 20 },
        { nombre: 'Yensy', apellido: 'Perez', edad: 20 },
      ],
    };
 }

 render() {
    return (
      <ul>
        {this.state.listaEstudiantes.map((estudiante, index) => (
          <li key={index}>{estudiante.nombre} {estudiante.apellido} {estudiante.edad} </li>
        ))}
      </ul>
    );
 }
}

