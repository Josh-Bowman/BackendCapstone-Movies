if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors")
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

app.use(express.json)
app.use(cors());

app.use(notFound);
app.use(errorHandler);

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);


module.exports = app;
