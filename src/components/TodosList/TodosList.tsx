import { List } from '@material-ui/core';
import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/todosContext';
import { TodoItem } from './TodoItem';

export function TodosList() {
  const { todos } = useContext(TodosContext);

  const todoCards = todos.map((todo) => <TodoItem key={todo._id} todo={todo} />);

  return <List>{todoCards}</List>;
}
