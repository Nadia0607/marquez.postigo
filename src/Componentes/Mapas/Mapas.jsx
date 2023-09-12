import React, { useEffect, useState } from 'react';
import { GetMapas } from '../../Api/GetMapas';
import './Mapas.css';

export default function Mapas() {
  const [mapas, setMapas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetMapas();
        setMapas(data);
      } catch (error) {
        console.error('Error al obtener los mapas', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mapas-container">
      {mapas.map((mapa) => (
        <div className="card shadow" key={mapa.id}>
          <h4>{mapa.displayName}</h4>
          <img className="imagen" src={mapa.listViewIcon} alt="imagen mapa" />
        </div>
      ))}
    </div>
  );
}
