export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '056fa6f867msh81f8f74898e9a60p11e78bjsnafb2d9c9b5be',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'},
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
