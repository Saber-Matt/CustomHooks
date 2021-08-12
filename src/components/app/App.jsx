import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../detail/CharacterDetail';


export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails}/>
      </Switch>
    </>
  ); 
}
