import { CreateProps, GetProps, RemoveProps, UpdateProps, StorageMethods } from '../types/storage';
import { Todo } from '../types/todo';

export function useTodoStorage(): StorageMethods {
  const storage = sessionStorage;

  const create = ({ todo }: CreateProps) => {
    const todoSerialized = JSON.stringify(todo);
    storage.setItem(String(todo.id), todoSerialized);
  };

  const update = ({ id, values }: UpdateProps) => {
    if (!values) {
      return {};
    }

    const todoSerialized = storage.getItem(String(id));
    if (!todoSerialized) {
      return {};
    }

    const todo = JSON.parse(todoSerialized);
    return todo;
  };

  const remove = ({ id, todo }: RemoveProps) => {
    const idToRemove = id ? String(id) : String(todo.id);
    storage.removeItem(idToRemove);
  };

  const get = ({ id }: GetProps) => {
    if (id) {
      const candidate = storage.getItem(String(id));
      if (candidate) {
      }
    }
  };

  const getAll = () => {
    const allKeys = Object.keys(localStorage);
    return allKeys.reduce<Todo[]>((results, key) => {
      const todoSerialized = localStorage.getItem(key);
      if (todoSerialized) {
        const todo = JSON.parse(todoSerialized);
        results.push(todo);
      }
      return results;
    }, []);
  };

  return {
    create,
    update,
    remove,
    get,
    getAll,
  };
}
