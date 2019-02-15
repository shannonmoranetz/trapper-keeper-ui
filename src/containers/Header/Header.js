import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showPopUp } from '../../actions';

export const Header = (props) => {
  return (
  <div className="Header">
    <h1 className="title">Trapper-Keeper</h1>
    <Link to='/new-note' onClick={() => props.showPopUp(true)}>Add Note</Link>
  </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  showPopUp: shouldDisplay => dispatch(showPopUp(shouldDisplay))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);