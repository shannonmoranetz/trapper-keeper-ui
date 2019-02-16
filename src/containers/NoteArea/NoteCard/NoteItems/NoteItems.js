import React from "react";
import PropTypes from "prop-types";

export const NoteItems = ({ noteItems }) => {
  const jsxItems = noteItems.map(item => (
    <div key={item.id} id={item.id} iscompleted={JSON.stringify(item.isCompleted)}>
      {item.text}
    </div>
  ))
  return (
  <div>
    {jsxItems.filter(item => (
      item.props.iscompleted === 'false'
    ))}
    {jsxItems.filter(item => (
      item.props.iscompleted === 'true'
    ))}
  </div>
  )
};

NoteItems.propTypes = {
  noteItems: PropTypes.array
};
