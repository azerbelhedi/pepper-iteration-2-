import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { StoreContext } from "../../App";

export default function Routes() {
  const { store, setStore } = useContext(StoreContext);

  return (
    <div className="paper">
      <Route exact path="/courses">
        <h1> courses</h1>
      </Route>
      {store.status === "offline" ? (
        <div>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </div>
      ) : null}
    </div>
  );
}
