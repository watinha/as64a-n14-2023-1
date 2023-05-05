import { MongoClient } from 'mongodb';

export class Users {

  static async _search (query) {
    const client = new MongoClient('mongodb://mongo/test'),
          conn = await client.connect(),
          db = conn.db(),
          result = await query(db);
    conn.close();
    return result;
  }

  static async find () {
    return Users._search((db) =>
      db.collection('users').find().toArray());
  }

  static async login ({ name }) {
    return Users._search((db) =>
      db.collection('users').findOne({ name }));
  }

}
