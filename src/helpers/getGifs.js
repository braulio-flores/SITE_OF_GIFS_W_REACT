
export const getGgifs = async ( category ) => {
    let url =
      `https://api.giphy.com/v1/gifs/search?api_key=dT4OslWLpKiT4uv3PkMNffnVXMfpf0q5&q=${ encodeURI(category) }&limit=20`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: item.images.downsized_medium.url
      };
    });

    return gifs;
  };
