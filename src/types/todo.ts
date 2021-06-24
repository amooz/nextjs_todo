export interface Todo {
  id: number;
  title: string;
  description?: string;
  status: Status;
  dueDate: Date;
  createdDate: Date;
}

export type Status = 'pending' | 'done';
