import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/courses">courses</Link>
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      <div className="auth-state">offline</div>
    </div>
  );
}
