import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core'

export const ErrorDisplay = (props) => {
  return (
    <div className='errorDisplay'>
      <Typography variant='display4'>Error 404</Typography>
      <Typography variant='display3'>Page not found.</Typography>
      <Typography variant='display2'>The path localhost:/3000{props.location.pathname} was not found.</Typography>
      <NavLink to='/'><Button>Return Home</Button></NavLink>
    </div>
  )
};

export default withRouter(ErrorDisplay);