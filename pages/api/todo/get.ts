import { NextApiRequest, NextApiResponse } from 'next';
import { TodoGetter } from '../services/todo/getter';

const GetTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  const todoGetter = new TodoGetter();
  const searchParams = parseSearchParams(req);
  const { status, data, error } = await todoGetter.get(searchParams);
  res.status(status).json({ data, error });
};

function parseSearchParams(req: NextApiRequest) {
  const { search } = req.query;
  if (!search) {
    return;
  }

  if (Array.isArray(search)) {
    return search.join(', ');
  }

  return search;
}

export default GetTodos;
