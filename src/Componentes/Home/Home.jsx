import React, { useEffect,useState } from 'react'
import DetalleAgentes from '../DetalleAgentes/DetalleAgentes';

export default function Home() {

const [agentes, setAgentes] = useState([]);

useEffect(() => {
  async function traerAgentes(){
    try{
      const response = await fetch('https://valorant-api.com/v1/agents');
      if(!response.ok){
        throw new Error ('Fallo la peticion');
      }
      const data = await response.json();
      //console.log(data);
      const algunosagentes = data.data.slice(0,12);
      setAgentes(algunosagentes);
      
    }
    catch(error){
      console.error('Error al obtener los agentes',error);
    }
  }

traerAgentes();

}, [])
//console.log(agentes);
  return (
    <>
    {
      agentes.map((agente,i)=> {return(<DetalleAgentes agente={agente} key={i} />)})
    }
    
    </>
  )
}
