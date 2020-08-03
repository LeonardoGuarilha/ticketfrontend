import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
