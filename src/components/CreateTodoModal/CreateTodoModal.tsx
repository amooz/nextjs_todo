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
import { UnsavedTodo } from '../../types/storage';

interface Props {
  createTodo: (todo: UnsavedTodo) => void;
  onClose: () => void;
  open: boolean;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function CreateTodoModal({ createTodo, onClose: onCloseModal, open = false }: Props) {
  const [formData, setFormData] = useState<Partial<UnsavedTodo>>({ title: '', description: '', dueDate: new Date() });

  const setTodoName = (event: ChangeEvent) => setFormData((todo) => ({ ...todo, title: event.target.value }));
  const setTodoDescription = (event: ChangeEvent) =>
    setFormData((todo) => ({ ...todo, description: event.target.value }));
  const setTodoDueDate = (event: ChangeEvent) =>
    setFormData((todo) => ({ ...todo, dueDate: new Date(event.target.value) }));
  const resetForm = () => setFormData({ title: '', description: '', dueDate: new Date() });

  const onClose = () => {
    onCloseModal();
    resetForm();
  };

  const onSubmit = () => {
    createTodo(formData as UnsavedTodo);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">New Todo</DialogTitle>
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
              defaultValue="2021-05-25"
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
  return date.toISOString().split('T')[0];
}
