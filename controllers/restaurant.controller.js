const { selectRestaurants, insertRestaurant, deleteRestrauntById, selectRestaurantsById } = require("../models/restaurants.models")

exports.getRestaurants = (req, res) => {
    selectRestaurants().then((restaurants) => {
        res.status(200).send({ restaurants });
    });
};

exports.getRestaurantsByID = (req, res, next) => {
    const { restaurant_id } = req.params;
    console.log(restaurant_id);
    selectRestaurantsById(restaurant_id)
        .then((restaurant) => {
            res.status(200).send({restaurant})
        })
        .catch(next)
}

exports.postRestaurant = (req, res) => {
    const newRestaurant = req.body;
    insertRestaurant(newRestaurant).then((restaurant) => {
        res.status(201).send({ restaurant })
    });
}

exports.removeRestaurantById = (req, res) => {
    const { restaurant_id } = req.params;
    deleteRestrauntById(restaurant_id).then(() => {
        res.status(204).send();
    })
}