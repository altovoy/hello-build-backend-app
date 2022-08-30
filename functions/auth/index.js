const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");

const app = express();
const api = require("./router.js");
app.use(cors({ origin: process.env.CORS }));
app.use(express.json());
app.use("/v1/auth", api);

module.exports.default = serverless(app);
