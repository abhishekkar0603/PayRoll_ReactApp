import React from "react";
import Layout from "./layout";
import fire from "../config/fire";
import { useHistory, Link } from "react-router-dom";
import { Button, Icon, Image } from "semantic-ui-react";
import logo from "./favicon.ico";

const Logout = () => {
  let history = useHistory();
  return (
    <Layout>
      <div className="ui menu" style={{ height: "5%" }}>
        <div className="item">
          <Link to="/">
            <Image src={logo} avatar alt="Home" />
          </Link>
        </div>
        <div className="item">
          <Link to="/addemp">
            <Button icon type="button" className="btn btn-warning">
              <Icon name="add" />
              Add Employee
            </Button>
          </Link>
        </div>
        <div className="right menu">
          <div className="item">
            <Button
              icon
              color="purple"
              type="button"
              className="btn btn-warning"
              onClick={event => {
                event.preventDefault();
                fire.auth().signOut();
                sessionStorage.setItem("isLogged", false);
                history.push("/");
              }}
            >
              <Icon name="sign-out" /> Log Out
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Logout;
