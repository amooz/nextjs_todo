import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let nextId = 0;
  res.status(200).json({ id: nextId++ });
};
