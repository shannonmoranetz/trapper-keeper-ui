import React, { Component } from "react";
import { NoteArea, CreateNote } from "../";
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getNotes } from "../../thunks/";
import PropTypes from "prop-types";
import Header  from '../Header/Header';

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
        <Header />
        <Route path='/' component={NoteArea} />
        <Route path='/new-note' render={() => 
          this.props.shouldDisplay ?
          <CreateNote /> :
          <Redirect to='/' />
          }/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  shouldDisplay: state.shouldDisplay
});

export const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

App.propTypes = {
  getNotes: PropTypes.func
};
