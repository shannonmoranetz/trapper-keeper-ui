import React from "react";
import { NoteItems } from "../../";
import { connect } from 'react-redux';
import { setCurrentNote, showPopUp } from '../../../actions';

export class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    let { note, setCurrentNote, showPopUp } = this.props;
    setCurrentNote(note);
    showPopUp(true);
  }

  render() {
    const { title, noteItems } = this.props.note;
    return (
      <div onClick={this.handleClick}>
        <h2>{title}</h2>
        <ul>
          <NoteItems noteItems={noteItems} />
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  showPopUp: shouldDisplay => dispatch(showPopUp(shouldDisplay))
});

export default connect(null, mapDispatchToProps)(NoteCard);
