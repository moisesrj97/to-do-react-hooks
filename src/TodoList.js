import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Todo from './Todo';
import { TodoListStyles } from './styles';

const useStyles = makeStyles(TodoListStyles);

export default function TodoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.todoList}>
      {props.todos.map((e) => {
        return <Todo text={e.text} key={e.id} id={e.id} deleteTodo={props.handleDeleteTodo} editTodo={props.handleEditTodo} />;
      })}
    </div>
  );
}
