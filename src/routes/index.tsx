import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import EditTicket from '../pages/EditTicket';
import CreateTicket from '../pages/CreateTicket';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/ticket/:id+" component={EditTicket} />
      <Route path="/createTicket" component={CreateTicket} />
    </Switch>
  );
};

export default Routes;
