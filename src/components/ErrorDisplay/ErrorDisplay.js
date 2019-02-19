import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button, Typography } from '@material-ui/core'

export const ErrorDisplay = (props) => {
  return (
    <div className='errorDisplay'>
      <Typography variant='h2'>Error 404</Typography>
      <Typography variant='h3'>Page not found.</Typography>
      <Typography variant='h4'>The path localhost:/3000{props.location.pathname} was not found.</Typography>
      <NavLink to='/'><Button>Return Home</Button></NavLink>
    </div>
  )
};

export default withRouter(ErrorDisplay);