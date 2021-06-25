import { Card, CardContent, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { Todo } from '../../types/todo';

interface Props {
  todo: Todo;
}

export function TodoCard({ todo }: Props) {
  const { _id: id, title, description, status, dueDate } = todo;
  const updateTodo = useUpdateTodo();

  const setDone = () => updateTodo({ ...todo, status: 'done' });
  const setPending = () => updateTodo({ ...todo, status: 'pending' });

  const button =
    todo.status === 'pending' ? (
      <Button onClick={setDone}>Mark done</Button>
    ) : (
      <Button onClick={setPending}>Mark pending</Button>
    );

  return (
    <Card key={id}>
      <CardContent>
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        {description}
        {status}
        {dueDate}
        {button}
      </CardContent>
    </Card>
  );
}
