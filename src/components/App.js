import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
//import UsersList from './UsersList';
import RaidsList from './RaidsList';
import CreateRaid from './CreateRaid';
import Login from './Login';
import './../styles/App.css';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={RaidsList} />
          <Route exact path="/create" component={CreateRaid} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};


export default App;
