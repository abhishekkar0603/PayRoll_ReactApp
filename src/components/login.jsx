import React from "react";
import Layout from "./layout";
import fire from "../config/fire";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  return (
    <Layout>
      <div className="login">
        <form
          onSubmit={event => {
            event.preventDefault();
            const promise = fire
              .auth()
              .signInWithEmailAndPassword(
                event.target.username.value,
                event.target.password.value
              );
            promise.catch(e => {
              alert("Invalid Username or Password");
            });
            const user = fire.auth().currentUser;
            if (user) {
              sessionStorage.setItem("isLogged", true);
              history.push("/home");
            }
          }}
        >
          <fieldset>
            <legend>Login</legend>
            <div className="form-group row"></div>
            <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
                name="username"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
