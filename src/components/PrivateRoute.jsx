import React from "react";
import { Route, Link } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("isLogged") === "true" ? (
          children
        ) : (
          <div>
            <h1>No Active user detected, Please login</h1>
            <Link to="/login">
              <button type="button" className="btn btn-primary">
                LogIn
              </button>
            </Link>
          </div>
        )
      }
    />
  );
};

export default PrivateRoute;
