import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";
import PropTypes from "prop-types";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  
  componentDidMount = () => {
    this.props.getNotes();
  };

  handleClick = () => this.setState({ showPopup: !this.state.showPopup });
  render() {
    const { showPopup } = this.state;
    return (
      <div className="App">
        <h1 className="title">Trapper-Keeper</h1>
        <div onClick={this.handleClick}>Add Note</div>
        <CreateNote canRender={showPopup} />
        <NoteArea />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default connect(
  null,
  mapDispatchToProps
)(App);

App.propTypes = {
  getNotes: PropTypes.func
};
