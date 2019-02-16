import React from "react";
import PropTypes from "prop-types";

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

NoteItems.propTypes = {
  noteItems: PropTypes.array
};
