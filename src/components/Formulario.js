import React, { useState } from 'react';


export const Form = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nombre,
      apellido,
      correo,
      fechaNacimiento,
      telefono,
    };
    setDataList([...dataList, formData]);

    setNombre('');
    setApellido('');
    setCorreo('');
    setFechaNacimiento('');
    setTelefono('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
        />
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo"
        />
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
        />
        <button type="submit">Guardar</button>
      </form>
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>
            {data.nombre} {data.apellido}, {data.correo}, {data.fechaNacimiento}, {data.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};
