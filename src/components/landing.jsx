import React from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <Layout>
      <div
        className="jumbotron-fluid"
        style={{ marginTop: "15%", marginLeft: "20%" }}
      >
        <h1 className="display-4">Welcome!!!</h1>
        <p className="lead">Please Log In As Admin.</p>
        <div className="lead">
          <Link to="/login">
            <Button icon type="button" className="btn btn-primary">
              <Icon name="sign-in" /> Log In
            </Button>
          </Link>
          <Link to="/home">
            <Button icon type="button" className="btn btn-primary">
              <Icon name="home" /> Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
