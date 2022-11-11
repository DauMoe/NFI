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
  it('Withdrawal fail because of larger than current balance', function(done) {
    request(app)
      .post('/payment/withdrawal')
      .set('Accept', 'application/json')
      .send({
        "user_id": 1,
        "amount": 999999999999999999999
      })
      .expect(400, {
        data: '',
        description: 'Amount is larger than your balance!'
      }, done);
  });
  it('Withdrawal successful', function(done) {
    request(app)
      .post('/payment/withdrawal')
      .set('Accept', 'application/json')
      .send({
        "user_id": 1,
        "amount": 0.01
      })
      .expect(200, done);
  });
  afterAll((done) => {
    connection.end();
    done();
  })
});
