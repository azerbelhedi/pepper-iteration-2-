import React, { createContext, useState } from "react";
import Menu from "./components/menu/Menu";
import Routes from "./components/routes/Routes";

export const StoreContext = createContext({});

function App() {
  const [store, setStore] = useState(initialStore);

  const setAction = (data) => {
    setStore(data);
  };

  if (store.status === "offline") {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    console.log(AUTH_TOKEN);

    if (AUTH_TOKEN !== null && AUTH_TOKEN !== "") {
      let localStore = store;
      localStore.status = "online";
      localStore.auth.token = AUTH_TOKEN;

      setStore(localStore);
      console.log(store)
    }
  }

  return (
    <div className="App">
      <StoreContext.Provider value={{ store, setStore }}>
        <Menu />
        <Routes />
      </StoreContext.Provider>
    </div>
  );
}

const initialStore = {
  status: "offline",
  auth: {
    token: "",
    tokenExpiration: "",
    userId: "",
    userName: "",
  },
};

export default App;
