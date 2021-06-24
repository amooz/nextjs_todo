import React from 'react';
import { Layout } from '../src/components/Layout';
import '@fontsource/roboto';
import { useTodoStorage } from '../src/hooks/useTodoStorage';
import { useIsServer } from '../src/hooks/useIsServer';
import { TodoCard } from '../src/components/TodoCard';

export default function Home() {
  const { getAll } = useTodoStorage();
  const { isServer } = useIsServer();

  const todoCards = isServer ? [] : getAll().map((todo) => <TodoCard key={todo.id} todo={todo} />);

  return <Layout>{todoCards}</Layout>;
}
