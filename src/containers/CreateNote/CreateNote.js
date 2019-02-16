import React from "react";
import { connect } from "react-redux";
import { addNewNote, updateNote } from "../../actions";
import { postNote, putNote } from "../../thunks";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { withRouter } from "react-router-dom";

export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      noteItems: this.props.noteItems || [],
      currentFocus: null
    };
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value, currentFocus: null });
  };

  makeCopy = element => JSON.parse(JSON.stringify(element))
  
  handleChangeNoteItems = event => {
    const noteItemsCopy = this.makeCopy(this.state.noteItems);
    const { value: newText } = event.target;
    const { id } = event.target.closest('label')
    const matchedNoteItem = noteItemsCopy.find(note => note.id === id);

    if (matchedNoteItem) {
      matchedNoteItem.text = newText;     
    } else {
      const newListItem = { id, text: newText, isCompleted: false };
      noteItemsCopy.push(newListItem);
    }

    this.setState({
      noteItems: noteItemsCopy,
      currentFocus: id
    });
  };

  handleToggleIsComplete = event => {
    const noteItemsCopy = this.makeCopy(this.state.noteItems);
    const { id } = event.target.closest('label');
    const matchedNoteItem = noteItemsCopy.find(note => note.id === id);

    if(matchedNoteItem) {
      matchedNoteItem.isCompleted = !matchedNoteItem.isCompleted
    } else {
      const newListItem = {id, text: '', isCompleted: event.target.checked}
      noteItemsCopy.push(newListItem);
    }

    this.setState({
      noteItems: noteItemsCopy,
      currentFocus: id
    })
  };

  handleItemDelete = (event) => {
    const noteItemsCopy = this.makeCopy(this.state.noteItems);
    const { id } = event.target.closest('label');
    const noteItemIndex = noteItemsCopy.findIndex(note => note.id === id);
    noteItemsCopy.splice(noteItemIndex, 1);
    this.setState({ 
      noteItems: noteItemsCopy
    });
  }

  getListItems() {
    const { noteItems } = this.state;
    let currentList = noteItems.map(item => {
      let jsxNoteItem = (
        <li key={uuid()}>
          <label id={item.id}>
            <input type='checkbox' onChange={this.handleToggleIsComplete} checked={item.isCompleted}/>
            <input
              key={item.id}
              autoFocus={item.id === this.state.currentFocus}
              onChange={this.handleChangeNoteItems}
              value={item.text}
            />
            <button onClick={this.handleItemDelete}>x</button>
          </label>
        </li>
      );
      return jsxNoteItem;
    });

    currentList.push(
      <li key={uuid()}>
        <label id={uuid()}>
          <input key={uuid()} onChange={this.handleChangeNoteItems} />
        </label>
      </li>
    );
    return currentList;
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, noteItems } = this.state;
    const { id: noteId, putNote, postNote } = this.props;
    if (noteId) {
      putNote({ title, noteItems, id: noteId });
    } else {
      postNote({ title, noteItems, id: uuid() });
    }
    
    this.props.history.push("/");
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input value={title} onChange={this.handleChangeTitle} />
        </label>
        <ul>{this.getListItems()}</ul>
        <button>Submit</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addNewNote: newNote => dispatch(addNewNote(newNote)),
  postNote: newNote => dispatch(postNote(newNote)),
  putNote: updatedNote => dispatch(putNote(updatedNote)),
  updateNote: updatedNote => dispatch(updateNote(updatedNote))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CreateNote)
);

CreateNote.propTypes = {
  addNewNote: PropTypes.func,
  postNote: PropTypes.func,
  putNote: PropTypes.func,
  updateNote: PropTypes.func
};
