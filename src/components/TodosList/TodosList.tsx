import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/todosContext';
import { TodoCard } from '../TodoCard';

export function TodosList() {
  const { todos } = useContext(TodosContext);

  const todoCards = todos.map((todo) => <TodoCard key={todo._id} todo={todo} />);

  return <>{todoCards}</>;
}
