import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../services/Api';





const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchData()
      .then(setCharacters);
  }, []);

  return { characters };
};

export default useCharacters;
