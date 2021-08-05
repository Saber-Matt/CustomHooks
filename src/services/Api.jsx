export const fetchData = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api');
    const json = await response.json();
    console.log(json);
  } catch(error) {
    console.log('error', error);
  }
};
