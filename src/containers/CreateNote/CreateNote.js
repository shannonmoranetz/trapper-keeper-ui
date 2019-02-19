import React from "react";
import { connect } from "react-redux";
import { addNewNote, updateNote } from "../../actions";
import { postNote, putNote } from "../../thunks";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { withRouter } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, List, ListItem, Button, Checkbox, IconButton, Input, Tooltip } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  iconButton: {
    margin: '5px'
  },
  formText: {
    color: '#48494a'
  }
}
export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      noteItems: this.props.noteItems || [],
      currentFocus: null
    };
  };

  
  handleChangeTitle = event => {
    this.setState({ title: event.target.value, currentFocus: null });
  };


  makeCopy = element => JSON.parse(JSON.stringify(element))


  handleChangeNoteItems = event => {
    const noteItemsCopy = JSON.parse(JSON.stringify(this.state.noteItems));
    const { id } = event.target.closest('label');
    const { value: newText } = event.target;
    const matchedNoteItem = this.findMatchingNoteItem(noteItemsCopy, id);
    if (matchedNoteItem) {
      matchedNoteItem.text = newText;
    } else {
      const newListItem = { id, text: newText, isCompleted: false };
      noteItemsCopy.push(newListItem);
    }
    this.updateNoteItems(noteItemsCopy, id);
  };

  handleItemDelete = event => {
    const noteItemsCopy = JSON.parse(JSON.stringify(this.state.noteItems));
    const { id } = event.target.closest('label');
    const noteItemIndex = noteItemsCopy.findIndex(note => note.id === id);
    noteItemsCopy.splice(noteItemIndex, 1);
    this.updateNoteItems(noteItemsCopy, id);
  };

  handleToggleIsComplete = event => {
    const noteItemsCopy = JSON.parse(JSON.stringify(this.state.noteItems));
    const { id } = event.target.closest('label');
    const matchedNoteItem = this.findMatchingNoteItem(noteItemsCopy, id);
    matchedNoteItem.isCompleted = !matchedNoteItem.isCompleted;
    this.updateNoteItems(noteItemsCopy, id);
  };

  findMatchingNoteItem = (noteItemsCopy, id) => {
    const matchedNoteItem = noteItemsCopy.find(note => note.id === id);
    return matchedNoteItem;
  };

  updateNoteItems = (noteItemsCopy, id) => {
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
  };

  getListItems = () => {
    const { classes } = this.props;
    let noteItems = this.state.noteItems.map(item => {
      let jsxNoteItem = (
        <ListItem key={uuid()}>
          <label id={item.id}>
            <Tooltip title='Mark item as complete' enterDelay='1000'>
              <Checkbox 
                onChange={this.handleToggleIsComplete} 
                checked={item.isCompleted} />
            </Tooltip>
            <Input
              key={item.id}
              autoFocus={item.id === this.state.currentFocus}
              onChange={this.handleChangeNoteItems}
              value={item.text}
              className={classes.formText}
            />
            <Tooltip title='Delete note item!' enterDelay='1000'>
              <IconButton 
                onClick={this.handleItemDelete} 
                className={classes.iconButton}>
                <DeleteOutline />
              </IconButton>
            </Tooltip>
          </label>
        </ListItem>
      );
      return jsxNoteItem;
    });
    return noteItems;
  };

  renderListItems = () => {
    const { classes } = this.props;
    let currentList = this.getListItems();
    currentList.push(
      <ListItem key={uuid()}>
        <label id={uuid()}>
          <Input key={uuid()} 
            onChange={this.handleChangeNoteItems} 
            placeholder={'Add a note item'}
            className={classes.formText}/>
        </label>
      </ListItem>
    );
    return currentList;
  };

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
    const { classes } = this.props;
    let isOpen = this.props.location.pathname.includes('note')
    return (
      <Dialog onClose={() => this.props.history.push('/')} open={isOpen} transitionDuration={1000} disableBackdropClick={true}>
        <DialogTitle>
          <Input 
          value={this.state.title} 
          onChange={this.handleChangeTitle} 
          placeholder='Add a title'
          className={classes.formText} />
        </DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleSubmit}>
            <List>{this.renderListItems()}</List>
            <Button type='submit' className={classes.formText}>Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
};

export const mapDispatchToProps = dispatch => ({
  addNewNote: newNote => dispatch(addNewNote(newNote)),
  postNote: newNote => dispatch(postNote(newNote)),
  putNote: updatedNote => dispatch(putNote(updatedNote)),
  updateNote: updatedNote => dispatch(updateNote(updatedNote))
});

export default withRouter(
  withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(CreateNote)
));

CreateNote.propTypes = {
  addNewNote: PropTypes.func,
  postNote: PropTypes.func,
  putNote: PropTypes.func,
  updateNote: PropTypes.func
};

