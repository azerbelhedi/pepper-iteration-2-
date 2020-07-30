import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { StoreContext } from "../../App";

export default function Menu() {
  const { store, setAction } = useContext(StoreContext);
  let { status } = store;
  return (
    <div className="menu">
      {status === "online" ? (
        <Link to="/courses">courses</Link>
      ) : (
        <div>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </div>
      )}
      <div className="auth-state">{status}</div>
    </div>
  );
}
