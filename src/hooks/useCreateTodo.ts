import { UnsavedTodo } from '../types/storage';

export function useCreateTodo() {
  const ceateTodo = async (todo: UnsavedTodo) => {
    const request = await fetch('/api/todo/create', {
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    return request.json();
  };
  return ceateTodo;
}
