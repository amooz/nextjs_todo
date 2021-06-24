import {
  makeStyles,
  Dialog,
  TextField,
  FormControl,
  FormGroup,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import { Todo } from '../../types/todo';

interface Props {
  onCreate?: (todo: Todo) => void;
  onClose: () => void;
  open: boolean;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function CreateTodoModal({ onCreate, onClose, open = false }: Props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">New Todo</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <FormGroup>
            <TextField id="title" label="Todo name" required />
            <TextField id="description" label="Description" />
            <br />
            <TextField id="dueDate" label="dueDate" type="date" defaultValue="2021-05-25" required />
          </FormGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onCreate} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
