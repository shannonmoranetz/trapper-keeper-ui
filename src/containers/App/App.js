import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  handleClick = () => this.setState({ showPopup: !this.state.showPopup });
  render() {
    const { showPopup } = this.state;
    return (
      <div className="App">
        <h1 className="title">Trapper-Keeper</h1>
        <div onClick={this.handleClick}>Add Note</div>
        <CreateNote canRender={showPopup}  />
        <NoteArea />
      </div>
    );
  }
}

export default App;
