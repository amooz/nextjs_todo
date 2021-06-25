import { Result } from '../../../../src/types/result';
import { Todo } from '../../../../src/types/todo';
import { TodoService } from './_todoService';

export class TodoUpdater extends TodoService {
  public update(todo: Todo) {
    const promise = new Promise<Result>((resolve, reject) => {
      this.db.update({ _id: todo._id }, todo, { returnUpdatedDocs: true }, (error, _count, updatedTodo) => {
        if (error) {
          reject({
            status: 500,
            data: {},
            error,
          });
        } else {
          resolve({
            status: 200,
            data: updatedTodo,
          });
        }
      });
    });

    return promise;
  }
}
