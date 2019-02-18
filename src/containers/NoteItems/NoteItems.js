import React from "react";
import PropTypes from "prop-types";
import { Divider, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  divider: {
    backgroundColor: 'red'
  },
  strikethrough: {
    textDecoration: 'line-through'
  }
}

export const NoteItems = ({ noteItems, classes }) => {
  const jsxItems = noteItems.map(item => (
    <Typography key={item.id} id={item.id} iscompleted={JSON.stringify(item.isCompleted)} className={item.isCompleted && classes.strikethrough}>
      {item.text}
      <Divider light/>
    </Typography>
  ))
  return (
  <div>
    {jsxItems.filter(item => (
      item.props.iscompleted === 'false'
    ))}
    <Divider className={classes.divider}/>
    {jsxItems.filter(item => (
      item.props.iscompleted === 'true'
    ))}
  </div>
  )
};

NoteItems.propTypes = {
  noteItems: PropTypes.array
};

export default withStyles(styles)(NoteItems)