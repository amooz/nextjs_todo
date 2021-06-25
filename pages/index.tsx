import React from 'react';
import { Layout } from '../src/components/Layout';
import '@fontsource/roboto';
import { Todo } from '../src/types/todo';
import { TodoGetter } from './api/services/todo/getter';
import { useTodos } from '../src/hooks/useTodos';
import { TodosContext } from '../src/contexts/todosContext';
import { TodosList } from '../src/components/TodosList';

interface Props {
  todos?: Todo[];
}

export default function Home({ todos: initialTodos }: Props) {
  const { todos, refresh } = useTodos({ todos: initialTodos });

  return (
    <TodosContext.Provider value={{ todos, refresh }}>
      <Layout>
        <TodosList />
      </Layout>
    </TodosContext.Provider>
  );
}

export async function getServerSideProps() {
  // SSR, can safely call the getTodo service directly
  const todoGetter = new TodoGetter();
  const { data: todos } = await todoGetter.get();

  return {
    props: { todos },
  };
}
