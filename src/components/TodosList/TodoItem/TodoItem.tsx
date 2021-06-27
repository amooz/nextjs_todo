import {
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Button,
  makeStyles,
  useTheme,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDeleteTodo } from '../../../hooks/useDeleteTodo';
import { useToggle } from '../../../hooks/useToggle';
import { useUpdateTodo } from '../../../hooks/useUpdateTodo';
import { Todo } from '../../../types/todo';
import { EditTodoModal } from '../../EditTodoModal';
import { Status } from '../../Status';

interface Props {
  todo: Todo;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& p': {
      'overflow-wrap': 'break-word',
    },
  },
  cardActions: {
    '& button': {
      width: '100%',
    },
  },
});

export function TodoItem({ todo }: Props) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { value: showEditTodoModal, toggleValue: toggleEditTodoModal } = useToggle();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const { title, description, status, dueDate } = todo;

  const setDone = () => updateTodo({ ...todo, status: 'done' });
  const setPending = () => updateTodo({ ...todo, status: 'pending' });
  const onDeleteTodo = () => deleteTodo(todo);

  const toggleMarkButton =
    todo.status === 'pending' ? (
      <Button onClick={setDone}>Mark done</Button>
    ) : (
      <Button onClick={setPending}>Mark pending</Button>
    );

  const subheading = `Due: ${new Date(dueDate).toLocaleDateString()}`;

  return (
    <ListItem>
      <Card raised className={styles.root}>
        <CardHeader
          title={
            <>
              <Status status={status} />
              {' ' + title}
            </>
          }
          subheader={subheading}
          action={
            <>
              <IconButton onClick={toggleEditTodoModal}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={onDeleteTodo}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        />
        <CardContent>
          <Typography color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>{toggleMarkButton}</CardActions>
      </Card>
      <EditTodoModal editTodo={updateTodo} open={showEditTodoModal} onClose={toggleEditTodoModal} todo={todo} />
    </ListItem>
  );
}
