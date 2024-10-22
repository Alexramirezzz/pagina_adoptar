import React, { useState } from 'react';

const Formulario = ({ mascota }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`¡Solicitud enviada para adoptar a ${mascota.nombre}!`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Formulario de Adopción</h2>
      <label>Nombre completo:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Dirección:</label>
      <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
      <button type="submit">Enviar Solicitud</button>
    </form>
  );
};

export default Formulario;
