import { NextApiRequest, NextApiResponse } from 'next';
import { TodoGetter } from '../services/todo/getter';

const GetTodos = async (_req: NextApiRequest, res: NextApiResponse) => {
  const todoGetter = new TodoGetter();
  const { status, data, error } = await todoGetter.get();
  res.status(status).json({ data, error });
};

export default GetTodos;
