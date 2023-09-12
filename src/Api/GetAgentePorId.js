export const GetAgentePorId = async(id) =>{
    try{
        const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
        if(!response.ok){
          throw new Error ('Fallo la peticion');
        }
        const data = await response.json();
        const agenteSeleccionado = data.data;
        return(agenteSeleccionado);
      }
      catch(error){
        console.error('Error al obtener los agentes',error);
      }
}