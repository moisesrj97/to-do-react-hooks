import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import './inputFix.css';
import { TodoFormStyles } from './styles';

const useStyles = makeStyles(TodoFormStyles);

export default function TodoForm(props) {
  const classes = useStyles();

  const [text, setText] = useState('');

  const addTodo = () => {
    if (text === '') {
      return alert('I don´t like empty tasks');
    }
    props.handleAddTodo(text);
    setText('');
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.inputContainer}>
        <TextField
          label="New Task"
          placeholder="Something to do?"
          variant="outlined"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <button className={classes.button} onClick={addTodo}>
        <AddIcon />
      </button>
    </div>
  );
}
