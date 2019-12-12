import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
