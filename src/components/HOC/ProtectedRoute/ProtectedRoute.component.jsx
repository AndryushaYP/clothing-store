import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path}>
      {() => (!props.currentUser ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;
