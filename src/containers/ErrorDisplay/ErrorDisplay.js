import React from "react";
import { withRouter, NavLink } from "react-router-dom";

export const ErrorDisplay = (props) => {
  return (
    <div>
      <h2>Error 404</h2>
      <h3>Page not found.</h3>
      <p>The path localhost:/3000{props.location.pathname} was not found.</p>
      <NavLink to='/'><button>Return Home</button></NavLink>
    </div>
  )
};

export default withRouter(ErrorDisplay);