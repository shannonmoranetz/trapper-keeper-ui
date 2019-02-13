import React from "react";
import { NoteCard } from "../";
import { connect } from "react-redux";

const NoteArea = props => {
  return props.notes.map(note => <NoteCard note={note} />);
};

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(mapStateToProps)(NoteArea);
