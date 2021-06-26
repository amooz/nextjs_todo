import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../src/types/todo';
import { TodoDeleter } from '../services/todo/deleter';

const DeleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const todoDeleter = new TodoDeleter();
  const todo: Todo = req.body;
  const { status, data, error } = await todoDeleter.delete(todo);
  res.status(status).json({ data, error });
};

export default DeleteTodo;
