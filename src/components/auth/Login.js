import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirm: false,
  });
  const { confirm, email, password } = userInput;

  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    variables: { email: email, password: password },
  });

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
