import { useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import { Todo } from '../types/todo';

export function useDeleteTodo() {
  const { refresh: refreshTodos } = useContext(TodosContext);

  const deleteTodo = async (todo: Todo) => {
    const request = await fetch('/api/todo/delete', {
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    await refreshTodos();
    return request.json();
  };
  return deleteTodo;
}
