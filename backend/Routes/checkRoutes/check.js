const express = require("express");
const {getAllProducts} = require("../../controllers/check/checkcontrollers")
const router = express.Router();

//add controllers to routers
router.route("/check").get(getAllProducts)

module.exports = router;