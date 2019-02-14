import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  componentDidMount = () => {
    this.fetchNotesOnMount();
  };

  fetchNotesOnMount = () => {
    try {
      this.props.getNotes("http://localhost:3001/notes");
    } catch (error) {
      console.log("you have an error", error);
    }
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

const mapDispatchToProps = dispatch => ({
  getNotes: url => dispatch(getNotes(url)),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
