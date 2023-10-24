const express = require("express");
const Router = express.Router();
const middleware = require("../middleware/middleware")
const save_Data = require("../controller/controller")

Router.post("/user",middleware, save_Data)

module.exports = Router