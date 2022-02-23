

export const GetGifs = async (category)=>{
    const url ='https://api.giphy.com/v1/gifs/search?key=8Z7fELIrZoTQPJNtK86MjNbxjXT4F37t&q='+ encodeURI(category) ;
      const respuesta = await fetch (url);
      const {data} = await respuesta.json();

      const gifs =data.map(img =>{
         return{
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url
         }
      })
      return gifs;
  }
  