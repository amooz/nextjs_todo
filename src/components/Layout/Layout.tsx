import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">A NextJS-based todo list, by Adam Mooz</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
}
