const express = require("express");
const { getRestaurants, postRestaurant, removeRestaurantById } = require("../controllers/restaurant.controller");
const restaurantRouter = express.Router();

restaurantRouter.route("/")
.get(getRestaurants)
.post(postRestaurant);

restaurantRouter.route("/:restaurant_id")
.delete(removeRestaurantById);


module.exports = restaurantRouter;