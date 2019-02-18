import React from "react";
import { NoteItems } from "../";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { deleteNote } from '../../thunks';
import { connect } from 'react-redux';
import { Card, IconButton, CardHeader, CardContent } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  card: {
    margin: 10
  }
}

export const NoteCard = ({ note, deleteNote, classes }) => (
  <Card className={classes.card}>
    <Link to={`/notes/${note.id}`} className={classes.link}>
    <CardHeader title={note.title}
      action={
        <NavLink to='/' onClick={() => deleteNote(note)}>
          <IconButton>
            <DeleteOutline/>
          </IconButton>
        </NavLink>
      }
    />
    <CardContent>
      <ul>
        <NoteItems noteItems={note.noteItems} />
      </ul>
    </CardContent>
    </Link>
  </Card>
);

export const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => dispatch(deleteNote(note))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(NoteCard));

NoteCard.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func
};
