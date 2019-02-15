import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";
import PropTypes from "prop-types";

export class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  componentDidMount = () => {
    this.props.getNotes();
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Trapper-Keeper</h1>
        <div onClick={this.handleClick}>Add Note</div>
        {this.props.showPopUp && <CreateNote />}
        <NoteArea />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  showPopUp: state.showPopUp
});

export const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  getNotes: PropTypes.func
};
