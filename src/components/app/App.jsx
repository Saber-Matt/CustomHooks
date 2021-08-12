import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../detail/CharacterDetail';
import Header from './Header';



export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetail}/>
      </Switch>
    </>
  ); 
}
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  const character = {
    name: 'Pickle Rick',
    image: 'http://image.com'
  };

  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character name={character.name} image={character.image}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});