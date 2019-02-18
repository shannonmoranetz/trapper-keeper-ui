import React from "react";
import { Link } from "react-router-dom";
import { withTheme, withStyles } from '@material-ui/core/styles'
import { AppBar, Typography, IconButton, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  toolTip: {
    maxWidth: 100
  },
  title: {
    fontWeight: 900
  }
}

const Header = ({ classes }) => (
  <AppBar position='sticky' color='primary'>
      <Typography variant='h1' align='center' className={classes.title}>Trapper-Keeper</Typography>
      <Tooltip title='Add a new note!' placement='bottom-end' className={classes.toolTip}><Link to="/new-note"><IconButton color='secondary'><AddIcon/></IconButton></Link></Tooltip>
  </AppBar>
);

export default withTheme()(withStyles(styles)(Header))