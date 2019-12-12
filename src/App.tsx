import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
import ProductPage from './containers/ProductPage';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/product/:product_id'>
          <ProductPage />
        </Route>
        <Route path='/*'>
          <Redirect to='/404'/>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
