export interface Todo {
  _id: string;
  title: string;
  description?: string;
  status: Status;
  dueDate: Date;
}

export type UnsavedTodo = Omit<Todo, '_id'>;

export type Status = 'pending' | 'done';
