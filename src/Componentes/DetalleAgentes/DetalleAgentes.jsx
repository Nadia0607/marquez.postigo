import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { GetAgentePorId } from '../../Api/GetAgentePorId';
import "./DetalleAgentes.css";

export default function DetalleAgentes() { 
  const [agenteSeleccionado, setAgenteSeleccionado] = useState();

  const {id}=useParams();
  useEffect(() => {

    const fetchdata = async () => {
      try{
        const data= await GetAgentePorId(id);
        setAgenteSeleccionado(data);
      }
      catch(error){
        console.error('Error al obtener los agentes',error);
      }
    }
  
  fetchdata();
  
  }, [])
  if(!agenteSeleccionado){
    return <h1>
      "no se encontró el elemento"
    </h1>

  }

  return (
    
    <>
    <div className='carddetalle shadow'>
    <h1>{agenteSeleccionado.displayName}</h1>
    <img src={agenteSeleccionado.displayIcon} alt="imagen" className='imagendetalle'/>
    <h2>Descripción:</h2>
    <p>{agenteSeleccionado.description}</p>
    </div>
    </>
  )
}
