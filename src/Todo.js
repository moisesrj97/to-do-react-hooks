import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { TodoStyles } from './styles';
import EditInput from './EditInput';

const useStyles = makeStyles(TodoStyles);

export default function Todo(props) {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  return (
    <div className={classes.todo}>
      {isEditing ? (
        <EditInput text={props.text} onChange={props.editTodo} id={props.id} />
      ) : (
        <p style={{ textDecoration: isCrossed ? 'line-through' : 'none' }} onClick={() => setIsCrossed(!isCrossed)}>
          {props.text}
        </p>
      )}
      <div>
        <span
          className={classes.edit}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <EditIcon />
        </span>
        <span
          className={classes.delete}
          onClick={() => {
            props.deleteTodo(props.id);
          }}
        >
          <HighlightOffIcon />
        </span>
      </div>
    </div>
  );
}
