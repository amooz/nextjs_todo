import { Container, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { useCreateTodo } from '../../hooks/useCreateTodo';
import { useToggle } from '../../hooks/useToggle';
import { CreateTodoModal } from '../CreateTodoModal';
import { SearchBar } from './components/SearchBar';

interface Props {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: {},
  newTodo: {
    margin: '0 0 0 auto',
  },
  searchBar: {
    width: '100%',
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
        <Toolbar>
          <SearchBar className={styles.searchBar} />
        </Toolbar>
        {children}
      </Container>
      <CreateTodoModal open={showCreateTodoModal} onClose={toggleCreateTodoModal} createTodo={createTodo} />
    </>
  );
}
