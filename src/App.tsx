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
        <Route exact path='/' component={HomePage} />
        <Route path='/product/:product_id' component={ProductPage} />
        <Route path='/*'>
          <Redirect to='/404'/>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
