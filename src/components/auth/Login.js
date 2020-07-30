import React, { useState, useContext } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { StoreContext } from "../../App";

export default function Login() {
  let { store, setStore } = useContext(StoreContext);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirm: false,
  });
  const { confirm, email, password } = userInput;

  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    variables: { email: email, password: password },
  });

  const _confirmLogin = (id, token) => {
    if (store.status === "offline") {
      setStore({ ...store, status: "online" });
      //save to cache (token, tokenExpiration)
      saveToken(token)
    }
  };

  const saveToken = (token) => {
    localStorage.setItem("AUTH_TOKEN", token);
  };

  if (confirm) {
    if (loading) {
      console.log(loading);
      return <h6>loading</h6>;
    }
    if (error) {
      console.log(error);
      return <h6>error</h6>;
    }
    if (data) {
      console.log(data);
      _confirmLogin(data.login.userId, data.login.token);
      return (
        <div>
          <h2>Welcome to Pepper</h2>
          <h4>{data.login.userId}</h4>
          <h4>{data.login.token}</h4>
        </div>
      );
    }
  } else {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // run query
            setUserInput({ ...userInput, confirm: true });
          }}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setUserInput({ ...userInput, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setUserInput({ ...userInput, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

const LOGIN_QUERY = gql`
  query LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;
