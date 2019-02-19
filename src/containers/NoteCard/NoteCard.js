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
  }
}

export const NoteCard = ({ note, deleteNote, classes }) => (
  <Tooltip title='Click to edit!' placment='top' enterDelay='2000'>
    <Card className={classes.card}>
      <Link to={`/notes/${note.id}`} className={classes.link}>
        <CardHeader
          title={note.title}
          classes={{ title: classes.title }}
          action={
            <NavLink to='/' onClick={() => deleteNote(note)}>
              <Tooltip title='Delete Card!'>
                <IconButton>
                  <DeleteOutline />
                </IconButton>
              </Tooltip>
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
