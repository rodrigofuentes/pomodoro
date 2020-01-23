const request = require('supertest');
const {
  describe, it, after, assert,
} = require('mocha');

// const express = require('express');
const app = require('../server/index');
// const app = express();

describe('GET /task', () => {
  after(process.exit);

  it('Returns with JSON object of all tasks', async (done) => {
    const res = await request(app)
      .get('/task')
      .set('Accept', 'application/json');
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res.body.task)
      .end(done);
  });
});
