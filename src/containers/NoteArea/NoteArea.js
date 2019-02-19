import React from "react";
import { NoteCard } from "../";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export const NoteArea = ({ notes }) => {
  const jsxNotes = notes.map(note => (
    <Grid key={note} item xs={12} sm={6} md={4} lg={2}>
      <NoteCard key={note.id} note={note} />
    </Grid>
  ));
  return (
    <Grid container justify="flex-start" alignItems="center">
      {jsxNotes}
    </Grid>
  );
};

export const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NoteArea);

NoteArea.propTypes = {
  notes: PropTypes.array
};
