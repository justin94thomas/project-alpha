import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Layout from './Pages/main/layout';
import ShoppingCart from './Pages/Shopping-Cart';
import Routes from './Setup/routes-manager/routes.json';
import Timer from './Pages/Timer';
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Switch>
            <Redirect exact from='/' to='/dashboard' />
            <Route path='/dashboard'>
              <Layout />
            </Route>
            <Route exact path={Routes.shoppingApp}>
              <ShoppingCart />
            </Route>
            <Route exact path={Routes.timer}>
              <Timer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
