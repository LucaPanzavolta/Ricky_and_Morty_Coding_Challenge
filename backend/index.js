require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

const app = express();

app.use(cors()).use(express.json()).use("/", routes);

app.listen(PORT, (err) => {
    if (err) console.error('❌ Unable to connect to the server: ', err); // eslint-disable-line
    console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`); // eslint-disable-line
});
