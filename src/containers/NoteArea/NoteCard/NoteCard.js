import React from "react";
import { NoteItems } from "../../";
class NoteCard extends React.Component {
  constructor({ note }) {
    super(note);
    this.state = {
      title: note.title,
      noteItems: note.noteItems
    };
  }

  render() {
    const { title, noteItems } = this.props.note;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <NoteItems noteItems={noteItems} />
        </ul>
      </div>
    );
  }
}

export default NoteCard;
