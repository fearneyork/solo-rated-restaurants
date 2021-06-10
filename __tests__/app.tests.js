const request = require("supertest");
const app = require("../app.js")

describe('/api tests', () => {
    test('GET /api - status 200 - object with message', () => {
        return request(app)
        .get("/api")
        .expect(200)
        
    });
});

describe('/api/restaurants tests', () => {
    test('GET /api/restaurants - status 200 - respond with an obejct of all of the restaurants', () => {
        return request(app)
        .get("/api/restaurants")
        .expect(200)
        .then((response) => {
            expect(typeof response.body).toBe("object");
        })
    });
    test('POST /api/restaurants - status 201 - responds with posted restaurant as object', () => {
        const newRestaurant = {
            restaurant_name: "Crazy Pedro's",
            area_id: 2,
            cuisine: "Pizza and Cocktails",
            website: "https://crazypedros.co.uk",
        };
        return request(app)
        .post("/api/restaurants")
        .expect(201)
        .send(newRestaurant)
        .then(({body}) => {
            console.log(body);
        })
    });
    test('DELETE /api/restaurants/:id - status 204', () => {
        
    });
});

