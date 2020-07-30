import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { StoreContext } from "../../App";

export default function Menu() {
  const { store, setStore } = useContext(StoreContext);
  let { status } = store;

  console.log("store from menu : ", store.status);
  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    let localStore = store;
    localStore.status = "offline";
    localStore.auth.token = "";
    setStore({ ...store, status: "offline" });
    setStore({ ...store, auth: { ...store.auth, token: "" } });
    console.log(store);
  };

  return (
    <div className="menu">
      {status === "online" ? (
        <div>
          <Link to="/courses">courses</Link>
          <button
            onClick={() => {
              logout();
              // update store with logout data
            }}
          >
            logout
          </button>
        </div>
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
