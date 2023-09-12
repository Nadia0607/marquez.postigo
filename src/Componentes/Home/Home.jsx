import React, { useEffect,useState } from 'react'
import { GetAgentes } from '../../Api/GetAgentes';
import TarjetaAgente from '../TarjetaAgente/TarjetaAgente';

export default function Home() {

const [agentes, setAgentes] = useState([]);
const [agenteSeleccionado, setAgenteSeleccionado] = useState();

useEffect(() => {
  const fetchdata = async () => {
    try{
      const data= await GetAgentes();
      setAgentes(data);
    }
    catch(error){
      console.error('Error al obtener los agentes',error);
    }
  }

fetchdata();

}, [])

//console.log(agentes);
  return (
    <>

    {
      agentes.map((agente)=> {return(<TarjetaAgente agente={agente} key={agente.uuid} />)})
    }
    
    </>
  )
}
