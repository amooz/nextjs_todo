import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { ReactNode } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { CreateTodoModal } from '../CreateTodoModal';

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  const { value: showCreateTodoModal, toggleValue: toggleCreateTodoModal } = useToggle();

  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">A NextJS-based todo list, by Adam Mooz</Typography>
            <Button color="inherit" onClick={toggleCreateTodoModal}>
              New
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Container>
      <CreateTodoModal open={showCreateTodoModal} onClose={toggleCreateTodoModal} />
    </>
  );
}
