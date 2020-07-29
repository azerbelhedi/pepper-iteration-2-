import React from "react";
import { Route } from "react-router-dom";
import Register from "../auth/Register";

export default function Routes() {
  return (
    <div className="paper">
      <Route exact path="/courses">
        <h1> courses</h1>
      </Route>
      <Route exact path="/login">
        <h1> login</h1>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </div>
  );
}
