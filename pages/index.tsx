import React from 'react';
import { Layout } from '../src/components/Layout';
import '@fontsource/roboto';
import { TodoCard } from '../src/components/TodoCard';
import { Todo } from '../src/types/todo';
import { TodoGetter } from './api/services/todo/getter';

interface Props {
  todos?: Todo[];
}

export default function Home({ todos }: Props) {
  const todoCards = todos?.map((todo) => <TodoCard key={todo._id} todo={todo} />);

  return <Layout>{todoCards}</Layout>;
}

export async function getServerSideProps() {
  // SSR, can safely call the getTodo service directly
  const todoGetter = new TodoGetter();
  const { data: todos } = await todoGetter.get();

  return {
    props: { todos },
  };
}
