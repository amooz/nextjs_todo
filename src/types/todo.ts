export interface Todo {
  id: string;
  title: string;
  description?: string;
  status: Status;
  dueDate: Date;
}

export type Status = 'pending' | 'done';
