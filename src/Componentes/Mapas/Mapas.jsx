import React,{useEffect,useState} from 'react'
import { GetMapas } from '../../Api/GetMapas';
import "./Mapas.css";



export default function Mapas() {
  const [mapas, setMapas] = useState([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      try{
        const data= await GetMapas();
        setMapas(data);
      }
      catch(error){
        console.error('Error al obtener los agentes',error);
      }
    }
  
  fetchdata();
  
  }, [])
  

    return (
      <>
      
  
      {
        mapas.map((mapa)=> {return(
          <div className="card shadow">
            <h4>{mapa.displayName}</h4>
            <img className="imagen" src={mapa.listViewIcon} alt= "imagen mapa"/>
          </div>
        )})
      }
      
      </>
    )
}
