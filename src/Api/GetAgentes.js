export const GetAgentes = async() =>{
    try{
        const response = await fetch('https://valorant-api.com/v1/agents');
        if(!response.ok){
          throw new Error ('Fallo la peticion');
        }
        const data = await response.json();
        const algunosagentes = data.data.slice(0,12);
        return(algunosagentes);
      }
      catch(error){
        console.error('Error al obtener los agentes',error);
      }
}