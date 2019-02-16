import React from "react";
import { NoteItems } from "../../";
import { connect } from "react-redux";
import { setCurrentNote, showPopUp } from "../../../actions";
import { Link } from "react-router-dom";

export class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    let { note, setCurrentNote, showPopUp } = this.props;
    setCurrentNote(note);
    showPopUp(true);
  };

  render() {
    const { title, noteItems } = this.props.note;
    return (
      <Link onClick={this.handleClick} to={`/notes/${this.props.note.id}`}>
        <h2>{title}</h2>
        <ul>
          <NoteItems noteItems={noteItems} />
        </ul>
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  showPopUp: shouldDisplay => dispatch(showPopUp(shouldDisplay))
});

const mapStateToProps = state => ({
  currentNote: state.currentNote
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteCard);
