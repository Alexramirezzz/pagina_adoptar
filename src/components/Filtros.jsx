import React, { useState } from 'react';

const Filtros = ({ manejarFiltros }) => {
  const [tipo, setTipo] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');

  const aplicarFiltros = () => {
    manejarFiltros({ tipo, edad, genero });
  };

  return (
    <div>
      <h2>Filtrar mascotas</h2>
      <label>Tipo de mascota:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Todos</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>
      <label>Edad:</label>
      <select value={edad} onChange={(e) => setEdad(e.target.value)}>
        <option value="">Todas las edades</option>
        <option value="Cachorro">Cachorro</option>
        <option value="Adulto">Adulto</option>
        <option value="2 Meses">2 Meses</option>
        <option value="3 Meses">3 Meses</option>
        <option value="4 Meses">4 Meses</option>
        <option value="5 Meses">5 Meses</option>
        <option value="6 Meses">6 Meses</option>
        <option value="7 Meses">7 Meses</option>
        <option value="8 Meses">8 Meses</option>
        <option value="9 Meses">9 Meses</option>
        <option value="10 Meses">10 Meses</option>
        <option value="1 Año">1 Año</option>
        <option value="2 Año">2 Año</option>
        <option value="3 Año">3 Año</option>
        <option value="4 Año">4 Año</option>
        <option value="5 Año">5 Año</option>
        <option value="6 Año">6 Año</option>
        <option value="7 Año">7 Año</option>
        <option value="8 Año">8 Año</option>
        <option value="9 Año">9 Año</option>
        <option value="10 Año">10 Año</option>
      </select>
      <label>Sexo:</label>
      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Ambos</option>
        <option value="macho">macho</option>
        <option value="hembra">hembra</option>
      </select>
      <button onClick={aplicarFiltros}>Aplicar</button>
    </div>
  );
};

export default Filtros;

