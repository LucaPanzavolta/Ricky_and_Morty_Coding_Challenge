require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { launchDatabaseAndServer } = require("./launchDatabaseAndServer");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors()).use(express.json()).use("/", routes);

launchDatabaseAndServer(app, PORT);
