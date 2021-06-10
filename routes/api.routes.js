const express = require("express");
const apiRouter = express.Router();
const { getApi } = require("../controllers/api.controller.js");
const restaurantRouter = require("./restaurants.routes.js");

//Given route starts with /api
apiRouter.get("/", getApi);

apiRouter.use("/restaurants", restaurantRouter)

module.exports = apiRouter;