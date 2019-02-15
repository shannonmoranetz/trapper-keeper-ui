import React from "react";
import { NoteItems } from "../../";
class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    let { note, updateNote } = this.props;
    updateNote(note)
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

export default NoteCard;
