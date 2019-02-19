import React from "react";
import { Link } from "react-router-dom";
import { withTheme, withStyles } from '@material-ui/core/styles'
import { AppBar, Typography, IconButton, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  toolTip: {
    maxWidth: 100,
    backgroundColor: 'primary'
  },
  title: {
    fontWeight: 900,
    color: '#48494a',
    align: 'flex-start',
    textShadow: '2px 2px 2px #658c91',
    marginLeft: '10px'
  },
  iconButton: {
    margin: 5
  }
}

export const Header = ({ classes }) => (
  <AppBar position='sticky' color='primary'>
    <Typography variant='display4' className={classes.title}>TrapperKeeper</Typography>
    <Tooltip title='Add a new note!' placement='bottom-end' className={classes.toolTip}>
      <Link to="/new-note">
        <IconButton color='secondary' className={classes.iconButton}>
          <AddIcon />
        </IconButton>
      </Link>
    </Tooltip>
  </AppBar>
);

export default withTheme()(withStyles(styles)(Header))
