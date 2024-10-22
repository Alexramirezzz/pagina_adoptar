
import React, { useState } from 'react';
import DetallesMascota from './DetallesMascota';
import Formulario from './Formulario'; 

const ListaMascotas = ({ mascotas, filtros }) => {
    const [mostrarDetalles, setMostrarDetalles] = useState({});

    const[mostrarformulario, setmostrarformulario] = useState({});

    const toggleDetalles = (id) => {
        setMostrarDetalles((prevState) => ({
          ...prevState,
          [id]: !prevState[id] // Alternar el estado para el ID de esta mascota
        }));
      };

      const toggleFormulario = (id) => {
        setmostrarformulario((prevState) => ({
          ...prevState,
          [id]: !prevState[id] // Alternar el estado del formulario para el ID de esta mascota
        }));
    };


      
        const mascotasFiltradas = mascotas.filter((mascota) => {
          return (
            (!filtros.tipo || mascota.tipo === filtros.tipo) &&
            (!filtros.edad || mascota.edad ===  filtros.edad) &&
            (!filtros.genero || mascota.genero === filtros.genero)
          );
        });

  return (
    <div>
      <h2>Lista de mascotas</h2>

      {mascotasFiltradas.map((mascota) => (
        <div key={mascota.id}>
            <img src={mascota.imagen} alt={mascota.nombre} width="300" height="200" />
          <p>{mascota.nombre}</p>
          <p>{mascota.tipo} - {mascota.edad} - {mascota.genero}</p>
          <button onClick={() => toggleDetalles(mascota.id)}>
            {mostrarDetalles[mascota.id] ? 'Ocultar detalles' : 'Ver más detalles'}
          </button>
          {mostrarDetalles[mascota.id] && <DetallesMascota mascota={mascota} />}
                        
            <button onClick={() => toggleFormulario(mascota.id)}>
                            {mostrarformulario[mascota.id] ? 'Ocultar formulario' : 'Adoptar'}
            </button>
            {mostrarformulario[mascota.id] && <Formulario mascota={mascota} />} {/* Muestra el formulario aquí */}
        </div>
      ))}
    </div>
  );
};

export default ListaMascotas;