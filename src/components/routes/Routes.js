import React from "react";
import { Route } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

export default function Routes() {
  return (
    <div className="paper">
      <Route exact path="/courses">
        <h1> courses</h1>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </div>
  );
}
