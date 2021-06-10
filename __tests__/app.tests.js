const request = require("supertest");
const app = require("../app.js")

describe('GET /api tests', () => {
    test('GET /api - status 200 - object with message', () => {
        return request(app)
        .get("/api")
        .expect(200)
        
    });
});