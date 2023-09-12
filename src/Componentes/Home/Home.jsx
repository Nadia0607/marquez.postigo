import React, { useEffect, useState } from 'react';
import { GetAgentes } from '../../Api/GetAgentes';
import TarjetaAgente from '../TarjetaAgente/TarjetaAgente';
import './Home.css'; // Agrega un archivo CSS para Home si no lo has creado aún

export default function Home() {
  const [agentes, setAgentes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAgentes();
        setAgentes(data);
      } catch (error) {
        console.error('Error al obtener los agentes', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="agentes-container">
      {agentes.map((agente) => (
        <TarjetaAgente agente={agente} key={agente.uuid} />
      ))}
    </div>
  );
}
