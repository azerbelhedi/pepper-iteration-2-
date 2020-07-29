import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export default function Register() {
  const [state, setState] = useState({ email: "", userKind: "", password: "" });
  const { email, password, userKind } = state;

  const [registerUser, { data }] = useMutation(REGISTER_MUTATION);

  // if(data){console.log(data)}

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser({
            variables: {
              email: email,
              password: password,
              userKind: userKind
            },
          });
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          name="userKind"
          placeholder="Kind of User"
          value={userKind}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

const REGISTER_MUTATION = gql`
  mutation registerUser(
    {$email: String!
    $password: String!
    $userKind: String!}
  ) {
    createUser(
      userInput: { email: $email, password: $password, userKind: $userKind }
    ) {
      _id
      email
    }
  }
`;
