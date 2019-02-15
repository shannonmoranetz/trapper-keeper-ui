import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";
import PropTypes from "prop-types";
import { showPopUp } from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  componentDidMount = () => {
    this.props.getNotes();
  };

  handleClick = () => {
    this.props.showPopUp(!this.props.shouldDisplay);
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Trapper-Keeper</h1>
        <div onClick={this.handleClick}>Add Note</div>
        {this.props.shouldDisplay && <CreateNote />}
        <NoteArea />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  shouldDisplay: state.shouldDisplay
});

export const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes()),
  showPopUp: shouldDisplay => dispatch(showPopUp(shouldDisplay))  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  getNotes: PropTypes.func
};
