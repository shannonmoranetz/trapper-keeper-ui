import React from "react";
import { NoteCard } from "../";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const NoteArea = ({ notes }) => {
  return notes.map(note => <NoteCard key={note.id} note={note} />);
};

export const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NoteArea);

NoteArea.propTypes = {
  notes: PropTypes.array
};
