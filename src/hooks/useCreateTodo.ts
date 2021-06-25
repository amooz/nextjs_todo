import { useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import { UnsavedTodo } from '../types/todo';

export function useCreateTodo() {
  const { refresh: refreshTodos } = useContext(TodosContext);

  const ceateTodo = async (todo: UnsavedTodo) => {
    const request = await fetch('/api/todo/create', {
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    await refreshTodos();
    return request.json();
  };
  return ceateTodo;
}
