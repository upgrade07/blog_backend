const express = require('express')
const foodController = require('../Api/food')

const foodRouter = express.Router()

foodRouter.route("/food")
    .get(foodController.apiController)
module.exports = foodRouter;