import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  divider: {
    backgroundColor: '#ff8922'
  },
  strikethrough: {
    textDecoration: 'line-through'
  }
};

export const NoteItems = ({ noteItems, classes }) => {
  const jsxItems = noteItems.map(item => (
    <div iscompleted={JSON.stringify(item.isCompleted)} key={item.id} >
      <Typography 
        id={item.id} 
        className={item.isCompleted ? classes.strikethrough : ''} 
        style={{color: '#48494a'}}
        variant='body2'>
        {item.text}
      </Typography>
      <Divider light/>
    </div>
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