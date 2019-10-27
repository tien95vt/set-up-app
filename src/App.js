import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Route1 from './containers/Route1/Route1';
import Route2 from './containers/Route2/Route2';
import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';
import Home from "./containers/Home/Home";

import  './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/route1" component={Route1} />
          <Route path="/route2" component={Route2}/>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
