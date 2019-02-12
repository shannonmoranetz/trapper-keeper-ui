import React from "react";

const NoteItemList = props => (
  <div>
    {props.noteItemList.map(item => (
      <div id={item.id}>{item.text}</div>
    ))}
  </div>
);

export default NoteItemList;
