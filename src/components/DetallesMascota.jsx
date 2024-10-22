import React from 'react';

const DetallesMascota = ({ mascota }) => {
  return (
    <div>
      <h2>Detalles de {mascota.nombre}</h2>
      <p>Tipo: {mascota.tipo}</p>
      <p>Edad: {mascota.edad}</p>
      <p>Genero: {mascota.genero}</p>
    </div>
  );
};

export default DetallesMascota;
