import React from "react";
import { connect } from "react-redux";
import { addNote } from "../../actions";
import uuid from "uuid/v4";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      noteItems: [
        { id: uuid(), text: "default" },
        { id: uuid(), text: "default" }
      ]
    };
  }
  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChange = event => {
    const { noteItems } = this.state;
    let tempNoteList = [...noteItems];
    const { id, text } = event.target;
    tempNoteList.forEach(note => {
      if (note.id == event.target.id) {
        note.text = event.target.value;
      }
    });
    if (!tempNoteList.find(note => note.id == event.target.id)) {
      tempNoteList.push({ id, text });
    }
    this.setState({
      noteItems: tempNoteList
    });
  };

  getListItems() {
    const { noteItems } = this.state;

    let currentList = noteItems.map(item => (
      <li>
        <input id={item.id} onChange={this.handleChange} value={item.text} />
      </li>
    ));

    currentList.push(
      <li onChange={this.handleChange}>
        <input id={uuid()} />
      </li>
    );

    return currentList;
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addNote } = this.props;
    const { title, noteItems } = this.state;
    addNote({ title, noteItems });
  };

  render() {
    return (
      this.props.canRender && (
        <form onSubmit={this.handleSubmit}>
          <label>
            title
            <input onChange={this.handleChangeTitle} />
          </label>
          <ul>{this.getListItems()}</ul>
          <button>Submit</button>
        </form>
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNote: newNote => dispatch(addNote(newNote))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
