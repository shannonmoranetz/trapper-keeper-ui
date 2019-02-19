import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme, withStyles } from '@material-ui/core/styles'
import { AppBar, Typography, IconButton, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  toolTip: {
    maxWidth: 100,
    height: 100,
    margin: 25
  },
  title: {
    fontWeight: 900,
    color: '#48494a',
    align: 'flex-start',
    textShadow: '2px 2px 2px #658c91',
    marginLeft: '10px'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export const Header = ({ classes }) => (
  <AppBar position='sticky' color='primary' className={classes.appBar}>
    <Typography variant='display4' className={classes.title}>TrapperKeeper</Typography>
    <Tooltip title='Add a new note!' placement='bottom-end' className={classes.toolTip}>
      <Link to='/new-note'>
        <IconButton color='secondary'>
          <AddIcon fontSize='large'/>
        </IconButton>
      </Link>
    </Tooltip>
  </AppBar>
);

export default withTheme()(withStyles(styles)(Header));
