import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoAppStyles } from './styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(TodoAppStyles);

export default function TodoApp() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    let todo = { text: newTodo, id: uuidv4() };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((e) => {
        if (e.id === id) {
          return { id: id, text: newText };
        }
        return e;
      })
    );
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Task <span className={classes.titleEmphatized}>Tracker</span>
          </h1>
        </div>
        <TodoForm handleAddTodo={addTodo} />
        <TodoList todos={todos} handleDeleteTodo={deleteTodo} handleEditTodo={editTodo} />
      </div>
    </div>
  );
}
