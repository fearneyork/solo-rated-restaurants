const db = require("../db/index.db.js");

//SELECT all Restaurants
exports.selectRestaurants = () => {
    return db
    .query(`SELECT * FROM restaurants`).then((result) => {
        return result.rows;
    })
}

exports.selectRestaurantsById = (restaurant_id) => {
    return db
    .query(
        `SELECT * FROM restaurants
        WHERE restaurant_id = $1;
        `, [restaurant_id])
    .then((result) => {
        return result.rows[0];
    })
}

exports.insertRestaurant = (newRestaurant) => {
    return db
    .query(
        `INSERT INTO restaurants
        (restaurant_name, area_id, cuisine, website)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *;`,
        [
            newRestaurant.restaurant_name,
            newRestaurant.area_id,
            newRestaurant.cuisine,
            newRestaurant.website
        ]
    )
    .then((result) => {
        return result.rows[0];
    })
}

exports.deleteRestrauntById = (restaurant_id) => {
    return db
    .query(`DELETE FROM restaurants WHERE restaurant_id = $1;`, [restaurant_id])
}