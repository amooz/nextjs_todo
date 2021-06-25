import { useState } from 'react';
import { Todo } from '../types/todo';
import { useGetTodos } from './useGetTodos';

interface Props {
  todos?: Todo[];
}

export function useTodos({ todos: initialTodos = [] }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const { getTodos } = useGetTodos();

  const refresh = async () => {
    const { data: todos } = await getTodos();
    setTodos(todos);
  };

  return { todos, refresh };
}
