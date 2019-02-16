import React from "react";
import { NoteCard } from "../";
import { connect } from "react-redux";

export const NoteArea = ({ notes }) => {
  return notes.map(note => <NoteCard key={note.id} note={note} />);
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NoteArea);
