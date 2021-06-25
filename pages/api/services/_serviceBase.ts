import { join } from 'path';
import Nedb from 'nedb';

type ServiceKind = 'user' | 'todo';

export class ServiceBase {
  private _kind: ServiceKind;
  private _db: Nedb | null;
  private _baseDir: string[];

  constructor(kind: ServiceKind) {
    this._kind = kind;
    this._db = null;
    this._baseDir = [process.env.PWD || __dirname, 'db'];
  }

  get db() {
    this._db ||= this.initiDbConnection();
    return this._db;
  }

  private initiDbConnection() {
    const dir = join(...this._baseDir, `${this._kind}.ds`);
    const db = new Nedb({ filename: dir, autoload: true });
    return db;
  }
}
