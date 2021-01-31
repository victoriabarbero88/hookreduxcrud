import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
import React from "react";
import { UserList } from "./components/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser/ >
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
