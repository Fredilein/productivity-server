const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slotController");

router.get('/', slotController.allSlots);
router.post('/', slotController.addSlot);

module.exports = router;
