import React from "react";
import Note from "../Note/Note";
import { connect } from "react-redux";

const NoteArea = props => {
  return props.notes.map(note => <Note note={note} />);
};

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(mapStateToProps)(NoteArea);
