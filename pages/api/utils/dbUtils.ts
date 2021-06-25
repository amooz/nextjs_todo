import { join } from 'path';
import Nedb from 'nedb';

export function openDatabase(kind: 'users' | 'todos') {
  const baseDir = process.env.PWD || __dirname;
  const todoStore = join(baseDir, 'db', `${kind}.ds`);
  const db = new Nedb({ filename: todoStore, autoload: true });

  console.log('Opened database at', todoStore);

  return db;
}
