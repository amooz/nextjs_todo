import { Todo } from './todo';

export type TodoId = Pick<Todo, 'id'>;

export interface CreateProps {
  todo: Todo;
}

export interface UpdateProps {
  id: TodoId;
  values: Partial<Omit<Todo, 'id'>>;
}

export interface RemovePropsById {
  id: TodoId;
  todo: never;
}

export interface RemovePropsByTodo {
  id: never;
  todo: Todo;
}

export type RemoveProps = RemovePropsById | RemovePropsByTodo;

export interface GetProps {
  id?: TodoId;
}

export interface StorageMethods {
  create: ({ todo }: CreateProps) => void;
  update: ({ id, values }: UpdateProps) => void;
  remove: ({ id, todo }: RemoveProps) => void;
  get: ({ id }: GetProps) => void;
  getAll: () => void;
}
