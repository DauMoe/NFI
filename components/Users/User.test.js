const request = require('supertest');
const app = require("./../../server");

test("Create new user", async () => {
  request(app).post("/users/new").expect(200);
})