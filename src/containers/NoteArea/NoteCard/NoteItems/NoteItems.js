import React from "react";
import uuid from "uuid/v4";
const NoteItems = props => (
  <div>
    {props.noteItems.map(item => (
      <div key={uuid()} id={item.id}>
        {item.text}
      </div>
    ))}
  </div>
);

export default NoteItems;
