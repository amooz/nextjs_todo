import { Card, CardContent, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { Todo } from '../../types/todo';
import { EditTodoModal } from '../EditTodoModal/EditTodoModal';

interface Props {
  todo: Todo;
}

export function TodoCard({ todo }: Props) {
  const { _id: id, title, description, status, dueDate } = todo;
  const { value: showEditTodoModal, toggleValue: toggleEditTodoModal } = useToggle();
  const updateTodo = useUpdateTodo();

  const setDone = () => updateTodo({ ...todo, status: 'done' });
  const setPending = () => updateTodo({ ...todo, status: 'pending' });

  const toggleMarkButton =
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
        {toggleMarkButton}
        <Button onClick={toggleEditTodoModal}>Edit</Button>
      </CardContent>
      <EditTodoModal editTodo={updateTodo} open={showEditTodoModal} onClose={toggleEditTodoModal} todo={todo} />
    </Card>
  );
}
