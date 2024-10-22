
import './App.css';
import React, { useState, useEffect } from 'react';
import Filtros from './components/Filtros.jsx';  
import ListaMascotas from './components/ListaMascota.jsx';  
import Formulario from './components/Formulario.jsx';
import './Style/Estilos.css';

const App = () => {
  const [filtros, setFiltros] = useState({
    tipo: '',
    edad: '',
    sexo: '',
  });

  const [setMascotaSeleccionada] = useState(null);

  const [mascotas, setMascotas] = useState([
    { id: 1, nombre: 'Max', tipo: 'Perro', edad: 'Adulto', sexo: 'Macho', foto: 'https://i.blogs.es/588b53/pastor-belga/650_1200.jpeg' },
    { id: 2, nombre: 'Luna', tipo: 'Perro', edad: 'Cachorro', sexo: 'Hembra', foto: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/05/Dogo-argentino-1.jpg' },
    { id: 3, nombre: 'Rayo', tipo: 'Gato', edad: 'Adulto', sexo: 'Macho', foto: 'https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551833_854x640.jpg' }
  ]);

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => {
        console.log(data.data); // Verifica las URLs de las imágenes
        setMascotas(data.data);
        setMascotaSeleccionada(data.data); // Inicializar con todos los datos
      })
      .catch(error => console.error('Error fetching mascotas:', error));
  }, [setMascotaSeleccionada]);

  const [mascotaAdoptar, setMascotaAdoptar] = useState(null);

  const manejarFiltros = (nuevosFiltros) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      ...nuevosFiltros,
    }));
  };

  

  const manejarAdopcion = (mascota) => {
    setMascotaAdoptar(mascota);
  };
//{mascotaSeleccionada && <DetallesMascota mascota={mascotaSeleccionada} />}
  return (
    <div className="App">
      <h1>ADOPTA</h1>

      <Filtros manejarFiltros={manejarFiltros} />

      <ListaMascotas
        mascotas={mascotas}
        filtros={filtros}
        manejarAdopcion={manejarAdopcion} 
      />
      
      
      {mascotaAdoptar && <Formulario mascota={mascotaAdoptar} />}
    
    </div>
  );
};

export default App;


