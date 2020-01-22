const request = require('supertest');
const { describe, it } = require('mocha');
const app = require('../server/index');


// const express = require('express');

// const app = express();

describe('GET /task', () => {
  it('Returns with JSON object of all tasks', (done) => {
    request(app)
      .get('/task')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
