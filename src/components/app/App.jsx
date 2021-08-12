import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import useCharacters from './state/Hook';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}
