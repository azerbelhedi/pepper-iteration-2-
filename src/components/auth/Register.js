import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export default function Register() {
  const [state, setState] = useState({ email: "", userKind: "", password: "" });
  const { email, password, userKind } = state;

  const [status, setStatus] = useState("init");

  const [registerUser, { data }] = useMutation(REGISTER_MUTATION);

  if (status === "init") {
    if (data && data.creatUser && status === "init") {
      console.log(data);
      console.log(data.creatUser);
      console.log(data.creatUser._id);
      console.log(data.creatUser.email);
      setStatus("success");
    }
    if (data && data.creatUser === null && status == "init" && email !== "") {
      return (
        <div>
          <h4>failure</h4>
        </div>
      );
    }

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            {
              /* alert("email : " + email + "pass : " + password + "kind : " + userKind) */
            }
            registerUser({
              variables: {
                userInput: {
                  email: email,
                  password: password,
                  userKind: userKind,
                },
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
  } else if (status === "success") {
    return (
      <div>
        <h3>Account created successfully</h3>
      </div>
    );
  }
}

const REGISTER_MUTATION = gql`
  mutation CreateUser($userInput: UserInput) {
    creatUser(userInput: $userInput) {
      _id
      email
    }
  }
`;
