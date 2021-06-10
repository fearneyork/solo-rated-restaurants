const { selectRestaurants, insertRestaurant } = require("../models/restaurants.models")

exports.getRestaurants = (req, res) => {
    selectRestaurants().then((restaurants) => {
        res.status(200).send({ restaurants });
    });
};

exports.postRestaurant = (req, res) => {
    const newRestaurant = req.body;
    insertRestaurant(newRestaurant).then((restaurant) => {
        res.status(201).send({ restaurant })
    });
}