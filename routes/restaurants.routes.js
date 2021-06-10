const express = require("express");
const { getRestaurants, postRestaurant } = require("../controllers/restaurant.controller");
const restaurantRouter = express.Router();

restaurantRouter.route("/")
.get(getRestaurants)
.post(postRestaurant)
.delete();


module.exports = restaurantRouter;