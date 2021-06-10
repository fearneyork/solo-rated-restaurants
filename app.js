const express = require("express");
const { handleCustomErrors, handlePsqlErrors, handleServerErrors } = require("./errors/index.error");
const apiRouter = require("./routes/api.routes");
const app = express();

app.use(express.json());

app.use("/api", apiRouter)

//ERROR HANDLING MIDDLEWARE
//CUSTOM ERROR HANDLING
app.use(handleCustomErrors)

//PSQL ERROR HANDLING
app.use(handlePsqlErrors)

//SERVER ERROR HANDLING
app.use(handleServerErrors)

module.exports = app;