import { Result } from '../../../../src/types/result';
import { UnsavedTodo } from '../../../../src/types/storage';
import { TodoService } from './_todoService';

export class TodoCreator extends TodoService {
  create(todo: UnsavedTodo) {
    const promise = new Promise<Result>((resolve, reject) => {
      this.db.insert(todo, (error, document) => {
        if (error) {
          reject({
            status: 500,
            data: document,
            error,
          });
        } else {
          resolve({
            status: 200,
            data: document,
          });
        }
      });
    });

    return promise;
  }
}
