import React from "react";
import PropTypes from "prop-types";

export const NoteItems = ({ noteItems }) => (
  <div>
    {noteItems.map(item => (
      <div key={item.id} id={item.id}>
        {item.text}
      </div>
    ))}
  </div>
);

NoteItems.propTypes = {
  noteItems: PropTypes.array
};
