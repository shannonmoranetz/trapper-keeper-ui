import React from "react";
import { NoteCard } from "../";
import { connect } from "react-redux";
import uuid from "uuid/v4";

const NoteArea = props => {
  return props.notes.map(note => <NoteCard key={uuid()} note={note} />);
};

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(mapStateToProps)(NoteArea);
