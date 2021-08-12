import React from 'react';
import Character from './Character';
import { useCharacters } from '../../state/Hook';
import { Link } from 'react-router-dom';
import usePaging from '../../state/paging';
import Paging from '../paging/Paging';
const CharacterList = () => {
  const [page, handlePageClick] = usePaging();
  const [characters, loading] = useCharacters(page);

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
      <Paging page={page} 
        characterLength={characters.length}
        onClick={handlePageClick}/>
      <ul>{character}</ul>
    </>
  );
  
};

export default CharacterList;
