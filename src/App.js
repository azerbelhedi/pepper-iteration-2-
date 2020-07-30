import React, { createContext, useState } from "react";
import Menu from "./components/menu/Menu";
import Routes from "./components/routes/Routes";

export const StoreContext = createContext({});

function App() {
  const [store, setStore] = useState(initialStore)

  const setAction = (data) => {
    setStore(data)
  }

  // use life cycle to check cache for token (cache/local storage or whatever...)


  return (
    <div className="App">
      <StoreContext.Provider value = {{store, setAction}} >
        <Menu />
        <Routes />
      </StoreContext.Provider>
    </div>
  );
}

const initialStore = {
  status : "offline",
  auth : {
    token : "",
    tokenExpiration : "",
    userId : "",
    userName : ""
  }
}

export default App;
