import {
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
  todo: Todo;
  editTodo: (todo: Todo) => void;
  onClose: () => void;
  open: boolean;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditTodoModal({ todo, editTodo, onClose: onCloseModal, open = false }: Props) {
  const [formData, setFormData] = useState<Todo>(todo);

  const setTodoName = (event: ChangeEvent) => setFormData((todo) => ({ ...todo, title: event.target.value }));
  const setTodoDescription = (event: ChangeEvent) =>
    setFormData((todo) => ({ ...todo, description: event.target.value }));
  const setTodoDueDate = (event: ChangeEvent) =>
    setFormData((todo) => ({ ...todo, dueDate: new Date(event.target.value) }));

  const onClose = () => {
    onCloseModal();
  };

  const onSubmit = async () => {
    await editTodo(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">Edit Todo</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <FormGroup>
            <TextField id="title" label="Todo name" required value={formData.title} onChange={setTodoName} />
            <br />
            <TextField
              id="description"
              label="Description"
              value={formData.description}
              onChange={setTodoDescription}
            />
            <br />
            <TextField
              label="dueDate"
              type="date"
              required
              value={formatDateFor(formData.dueDate)}
              onChange={setTodoDueDate}
            />
          </FormGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function formatDateFor(date?: Date) {
  if (!date) {
    return undefined;
  }
  return new Date(date).toISOString().split('T')[0];
}
