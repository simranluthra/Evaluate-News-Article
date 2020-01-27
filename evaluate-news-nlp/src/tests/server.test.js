const request = require('supertest');
const index = require('../server/index')

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(index).get('/').expect(200);
    });
})
