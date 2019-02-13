import React from "react";
import { NoteItemList } from "../";
class Note extends React.Component {
  constructor({ note }) {
    super(note);
    this.state = {
      title: note.title,
      noteItemList: note.noteItemList
    };
  }

  render() {
    const { title, noteItemList } = this.props.note;
    console.log(this.props);
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <NoteItemList noteItemList={noteItemList} />
        </ul>
      </div>
    );
  }
}

export default Note;
