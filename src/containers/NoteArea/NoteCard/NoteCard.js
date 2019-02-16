import React from "react";
import { NoteItems } from "../../";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => (
  <Link to={`/notes/${note.id}`}>
    <h2>{note.title}</h2>
    <ul>
      <NoteItems noteItems={note.noteItems} />
    </ul>
  </Link>
);

export default NoteCard;

NoteCard.propTypes = {
  note: PropTypes.object
};
