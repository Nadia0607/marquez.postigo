export const GetMapas = async() =>{
    try{
        const response = await fetch('https://valorant-api.com/v1/maps');
        if(!response.ok){
          throw new Error ('Fallo la peticion');
        }
        const data = await response.json();
        const algunosmapas = data.data.slice(0,8);
        return(algunosmapas);
      }
      catch(error){
        console.error('Error al obtener los Mapas',error);
      }
}