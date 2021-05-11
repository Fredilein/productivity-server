const express = require("express");
const router = express.Router();
const dayController = require("../controllers/dayController");

router.get('/:dayId', dayController.getForDay);

module.exports = router;
