import { Card, CardContent, Typography } from '@material-ui/core';
import { Todo } from '../../types/todo';

interface Props {
  todo: Todo;
}

export function TodoCard({ todo }: Props) {
  const { id, title, description, status, dueDate } = todo;

  return (
    <Card key={id}>
      <CardContent>
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        {description}
        {status}
        {dueDate}
      </CardContent>
    </Card>
  );
}
