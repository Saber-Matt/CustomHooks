import React from 'react';
import Character from './Character';
import { useCharacters } from '../../state/Hook';
import { Link } from 'react-router-dom';
const CharacterList = () => {
  const [characters, loading] = useCharacters();

  const character = characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/${character.id}`}>
          <Character {...character} />      
        </Link>
      </li>
    );
  });

  if(loading) return <h1>Loading...</h1>;
  return (
    <>  
        characterLength={characters.length}
      <ul>{character}</ul>
    </>
  );
  
};

export default CharacterList;
