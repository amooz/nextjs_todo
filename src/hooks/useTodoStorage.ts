import { CreateProps, RemoveProps, UpdateProps, StorageMethods } from '../types/storage';
import { Todo } from '../types/todo';

export function useTodoStorage(): StorageMethods {
  const create = ({ todo }: CreateProps): Todo => {
    const storage = getLocalStorageMethod();
    const todoSerialized = JSON.stringify(todo);
    storage.setItem(String(todo.id), todoSerialized);
    return todo;
  };

  const update = ({ id, values }: UpdateProps): Partial<Todo> => {
    const storage = getLocalStorageMethod();
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
    const storage = getLocalStorageMethod();
    const idToRemove = id ? String(id) : String(todo.id);
    storage.removeItem(idToRemove);
  };

  const getAll = () => {
    const storage = getLocalStorageMethod();
    const allKeys = Object.keys(storage);
    return allKeys.reduce<Todo[]>((results, key) => {
      const todoSerialized = storage.getItem(key);
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
    getAll,
  };
}

function getLocalStorageMethod() {
  return window.sessionStorage;
}
