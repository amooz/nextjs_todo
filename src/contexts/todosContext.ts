import { createContext } from 'react';
import { Todo } from '../types/todo';

interface TodosContext {
  todos: Todo[];
  refresh: (search?: string) => Promise<void>;
}

export const defaultTodosContext: TodosContext = {
  todos: [],
  refresh: async () => {},
};

export const TodosContext = createContext<TodosContext>(defaultTodosContext);
