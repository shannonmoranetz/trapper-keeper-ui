import React from "react";

const NoteItems = ({ noteItems }) => (
  <div>
    {noteItems.map(item => (
      <div key={item.id} id={item.id}>
        {item.text}
      </div>
    ))}
  </div>
);

export default NoteItems;
