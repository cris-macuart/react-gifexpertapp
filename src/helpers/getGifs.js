
const API_KEY = "dPon7lejdReX9HVM9NYmRrywidl6gFyB";
const API_URL = "https://api.giphy.com/v1/gifs";

export const getGif = async (categorias) => {
  const url = `${API_URL}/search?api_key=${API_KEY}&q=${encodeURI(categorias)}&limit=3&offset=0&rating=g&lang=es`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;

};