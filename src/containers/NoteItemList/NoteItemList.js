import React from "react";
import uuid from "uuid/v4";
const NoteItemList = props => (
  <div>
    {props.noteItemList.map(item => (
      <div key={uuid()} id={item.id}>
        {item.text}
      </div>
    ))}
  </div>
);

export default NoteItemList;
