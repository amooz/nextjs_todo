import Nedb from 'nedb';

type ServiceKind = 'user' | 'todo';

export class ServiceBase {
  private _kind: ServiceKind;
  private _db: Nedb | null;

  constructor(kind: ServiceKind) {
    this._kind = kind;
    this._db = null;
  }

  get db() {
    this._db ||= this.initiDbConnection();
    return this._db;
  }

  private initiDbConnection() {
    const db = new Nedb({ inMemoryOnly: true });
    return db;
  }
}
