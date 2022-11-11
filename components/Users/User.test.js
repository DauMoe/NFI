const request = require('supertest');
const { connection } = require('../../Utils/MySQLHelper');
const app = require("./../../server");

describe('USERS', function() {
  it('"lastname" missing', function(done) {
    request(app)
      .post('/users/new')
      .set('Accept', 'application/json')
      .send({
        "username": "test",
        "firstname": "Go Go",
      })
      .expect(400, {
        data: "",
        description: "'lastname' is required!"
      }, done);
  });

  it('Create user', function(done) {
    request(app)
      .post('/users/new')
      .set('Accept', 'application/json')
      .send({
        "username": "f",
        "firstname": "Go Go",
        "lastname": "Lee"
      })
      .expect(400, {
        data: "",
        description: 'Username already taken. Try other!'
      }, done)
  });
  afterAll((done) => {
    connection.end();
    done();
  })
});
