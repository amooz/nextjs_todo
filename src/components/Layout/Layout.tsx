import { Container, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';
import { useCreateTodo } from '../../hooks/useCreateTodo';
import { useToggle } from '../../hooks/useToggle';
import { CreateTodoModal } from '../CreateTodoModal';

interface Props {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: {},
  newTodo: {
    margin: '0 0 0 auto',
  },
});

export function Layout({ children }: Props) {
  const styles = useStyles();
  const { value: showCreateTodoModal, toggleValue: toggleCreateTodoModal } = useToggle();
  const createTodo = useCreateTodo();

  return (
    <>
      <Container maxWidth="sm">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">A NextJS-based todo list, by Adam Mooz</Typography>
            <Button className={styles.newTodo} color="inherit" onClick={toggleCreateTodoModal}>
              New
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Container>
      <CreateTodoModal open={showCreateTodoModal} onClose={toggleCreateTodoModal} createTodo={createTodo} />
    </>
  );
}
