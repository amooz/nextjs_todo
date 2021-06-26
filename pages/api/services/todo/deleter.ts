import { Result } from '../../../../src/types/result';
import { Todo } from '../../../../src/types/todo';
import { TodoService } from './_todoService';

export class TodoDeleter extends TodoService {
  public delete(todo: Todo) {
    const promise = new Promise<Result>((resolve, reject) => {
      this.db.remove({ _id: todo._id }, (error, count) => {
        if (error) {
          reject({
            status: 500,
            data: {},
            error,
          });
        } else {
          resolve({
            status: 200,
            data: count,
          });
        }
      });
    });

    return promise;
  }
}
