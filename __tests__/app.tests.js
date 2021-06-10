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
            expect(body.restaurant).toHaveProperty("restaurant_id");
            expect(body.restaurant).toHaveProperty("restaurant_name");
            expect(body.restaurant).toHaveProperty("area_id");
            expect(body.restaurant).toHaveProperty("cuisine");
            expect(body.restaurant).toHaveProperty("website");        })
    });
    test('DELETE /api/restaurants/:id - status 204', () => {
        return request(app)
        .delete("/api/restaurants/1")
        .expect(204);
    });
    test('GET /api/restaurants/:id - status 200 - responds with object of restaurants props', () => {
        const restaurant_id = 2;
        return request(app)
        .get(`/api/restaurants/${restaurant_id}`)
        .expect(200)
        .then(({body}) => {
            expect(typeof body).toBe("object");
            expect(body.restaurant).toHaveProperty("restaurant_id");
            expect(body.restaurant.restaurant_id).toBe(restaurant_id);
        })
    });
});

describe.only('Error handling tests', () => {
    test('status 400 - responds with an error message when passed a bad restaurant ID', () => {
        return request(app)
        .get("/api/restaurants/three")
        .expect(400)
        .then(({body}) => {
            expect(body.message).toBe("invalid input")
        })
    });
    test('status 404 - responds with object containing status code and error message', () => {
        return request(app)
        .get("/api/restaurants/15")
        .expect(404)
        .then(({body}) => {
            expect(body.message).toBe("No Restaurant found for restaurant ID of 15")
            console.log(body);
        })
    });
});

