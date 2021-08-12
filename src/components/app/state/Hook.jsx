import React, { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../../../services/Api';





const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCharacters()
      .then(setCharacters  => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading };
};

const useCharacter = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  // const {params} = useParams();
  // console.log(params);
  const { id } = useParams();
  useEffect(() => {
    fetchCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return [character, loading];
};

export { useCharacters, useCharacter };
