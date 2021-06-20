import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
//import UsersList from './UsersList';
import RaidsList from './RaidsList';
import CreateRaid from './CreateRaid';
import './../styles/App.css';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={RaidsList} />
          <Route exact path="/create" component={CreateRaid} />
        </Switch>
      </div>
    </div>
  );
};


export default App;
