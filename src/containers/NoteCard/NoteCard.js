import React from "react";
import { NoteItems } from "../";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { deleteNote } from '../../thunks';
import { connect } from 'react-redux';
import { Card, IconButton, CardHeader, CardContent, Tooltip } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  link: {
    textDecoration: 'none',
  },
  card: {
    margin: 10,
  },
  title: {
    color: '#48494a',
  },
  delete: {
    float: 'right',
    margin: '3px'
  }
}

export const NoteCard = ({ note, deleteNote, classes }) => (
  <Tooltip title='Click to edit!' placement='top' enterDelay={2000}>
    <Card className={classes.card}>
      <Link to='/' className={classes.delete}>
        <Tooltip title='Delete this note!'>
          <IconButton onClick={() => deleteNote(note)}>
            <DeleteOutline />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/notes/${note.id}`} className={classes.link}>
        <CardHeader
          title={note.title}
          classes={{ title: classes.title }}
        />
        <CardContent>
          <ul>
            <NoteItems noteItems={note.noteItems} />
          </ul>
        </CardContent>
      </Link>
    </Card>
  </Tooltip>
);

export const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => dispatch(deleteNote(note))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(NoteCard));

NoteCard.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func
};
