const request = require('supertest');
const { connection } = require('../../Utils/MySQLHelper');
const app = require("./../../server");

describe('PAYMENTS', function() {
  it('"amount" missing', function(done) {
    request(app)
      .post('/payment/deposit')
      .set('Accept', 'application/json')
      .send({
        "user_id": 20000000000
      })
      .expect(400, {
        data: "",
        description: "'amount' is required!"
      }, done);
  });
  it('Deposit sucessful', function(done) {
    request(app)
      .post('/payment/deposit')
      .set('Accept', 'application/json')
      .send({
        "user_id": 1,
        "amount": 0.6
      })
      .expect(200, done);
  });
  afterAll((done) => {
    connection.end();
    done();
  })
});
