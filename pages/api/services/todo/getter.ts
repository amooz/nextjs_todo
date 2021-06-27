import { Result } from '../../../../src/types/result';
import { TodoService } from './_todoService';

export class TodoGetter extends TodoService {
  public get() {
    const promise = new Promise<Result>((resolve, reject) => {
      this.db
        .find({}, {})
        .sort({ status: -1, dueDate: 1 })
        .exec((error, results) => {
          if (error) {
            reject({
              status: 500,
              data: {},
              error,
            });
          } else {
            resolve({
              status: 200,
              data: results,
            });
          }
        });
    });

    return promise;
  }
}
