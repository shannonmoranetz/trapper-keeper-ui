import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";
import PropTypes from "prop-types";
import Header from "../Header/Header";

export class App extends Component {
  componentDidMount = () => {
    this.props.getNotes();
  };

  findNote = ({ match }) => {
    const { notes } = this.props;
    const note = notes.find(note => note.id === match.params.id);
    return <CreateNote {...note} />;
  };

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={NoteArea} />
        <Route path="/new-note" component={CreateNote} />
        <Route path="/notes/:id" render={this.findNote} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes
});

export const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

App.propTypes = {
  getNotes: PropTypes.func,
  notes: PropTypes.array
};
