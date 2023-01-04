import { expect } from 'chai';
import * as mysql from 'mysql2/promise';

const options =
{
  'host': '127.0.0.1',
  'port': 3306,
  'user': 'test',
  'password': 'test',
  'database': 'test',
};

const conn = await mysql.createConnection(options);

after(function () {
  conn.end();
});

describe('Database', () => {

  describe('#select', () => {
    it('should return tables for current database', async () => {
      const results = await conn.query('SHOW TABLES');
      expect(results).to.be.a('array');
    });
    it('should return informations for other database', async () => {
      const results = await conn.query('SHOW DATABASES');
      expect(results).to.be.a('array');
    });
  });
});
