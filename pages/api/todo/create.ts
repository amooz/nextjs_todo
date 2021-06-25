import { NextApiRequest, NextApiResponse } from 'next';
import { UnsavedTodo } from '../../../src/types/todo';
import { TodoCreator } from '../services/todo/creator';

const CreateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const todoCreator = new TodoCreator();

  const todo = req.body as UnsavedTodo;

  const { status, data, error } = await todoCreator.create(todo);

  res.status(status).json({ error, data });
};

export default CreateTodo;
