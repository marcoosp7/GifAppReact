export const getGifs =  async(category) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=E4YMTXvhW3WOAmuDAUbBc4YiWa2e5ri1&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img  => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
