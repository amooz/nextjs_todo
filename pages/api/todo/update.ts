import { NextApiRequest, NextApiResponse } from 'next';
import { TodoUpdater } from '../services/todo/updater';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const todoUpdater = new TodoUpdater();
  const todo = req.body;
  const { status, data, error } = await todoUpdater.update(todo);

  res.status(status).json({ data, error });
};
