import React from "react";
import { NoteItems } from "../../";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { deleteNote } from '../../../thunks';
import { connect } from 'react-redux';

export const NoteCard = ({ note, deleteNote }) => (
  <div>
    <NavLink to='/' onClick={() => deleteNote(note)}>x</NavLink>
    <Link to={`/notes/${note.id}`}>
      <h2>{note.title}</h2>
      <ul>
        <NoteItems noteItems={note.noteItems} />
      </ul>
    </Link>
  </div>
);

export const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => dispatch(deleteNote(note))
});

export default connect(null, mapDispatchToProps)(NoteCard);

NoteCard.propTypes = {
  note: PropTypes.object,
  deleteNote: PropTypes.func
};
