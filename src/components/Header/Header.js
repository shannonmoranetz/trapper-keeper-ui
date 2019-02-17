import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Typography, IconButton, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  toolTip: {
    maxWidth: 100
    
  },

}

const Header = ({ classes }) => (
  <AppBar>
      <Typography variant='h1' align='center'>Trapper-Keeper</Typography>
      <Tooltip title='Add a new note!' placement='bottom-end' className={classes.toolTip}><Link to="/new-note"><IconButton color='secondary'><AddIcon/></IconButton></Link></Tooltip>
  </AppBar>
);

export default withStyles(styles)(Header)