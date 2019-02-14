import React from "react";
import { connect } from "react-redux";
import { addNewNote } from "../../actions";
import { postNote } from "../../thunks";
import uuid from "uuid/v4";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      noteItems: [],
      currentFocus: null
    };
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value, currentFocus: null });
  };

  handleChangeNotes = event => {
    const { noteItems } = this.state;
    let tempNoteList = [...noteItems];
    const { id, value } = event.target;

    tempNoteList.forEach(note => {
      if (note.id == event.target.id) {
        note.text = event.target.value;
      }
    });

    if (!tempNoteList.find(note => note.id == event.target.id)) {
      tempNoteList.push({ id, text: value });
    }

    this.setState({
      noteItems: tempNoteList,
      currentFocus: id
    });
  };

  getListItems() {
    const { noteItems } = this.state;

    let currentList = noteItems.map(item => {
      let newNode = (
        <li key={uuid()}>
          <input
            key={uuid()}
            autoFocus={item.id === this.state.currentFocus}
            id={item.id}
            onChange={this.handleChangeNotes}
            value={item.text}
          />
        </li>
      );

      return newNode;
    });

    currentList.push(
      <li key={uuid()}>
        <input key={uuid()} onChange={this.handleChangeNotes} id={uuid()} />
      </li>
    );

    return currentList;
  }

  handleSubmit = event => {
    event.preventDefault();
    // const { addNewNote } = this.props;
    const { title, noteItems } = this.state;
    this.props.postNote({ title, noteItems, id: uuid() });
    // addNewNote({ title, noteItems });
    this.setState({
      title: "",
      noteItems: [],
      currentFocus: null
    });
  };

  render() {
    const { title } = this.state;

    return (
      this.props.canRender && (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input value={title} onChange={this.handleChangeTitle} />
          </label>
          <ul>{this.getListItems()}</ul>
          <button>Submit</button>
        </form>
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewNote: newNote => dispatch(addNewNote(newNote)),
  postNote: newNote => dispatch(postNote(newNote))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
