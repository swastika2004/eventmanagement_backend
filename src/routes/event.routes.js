const express = require("express");
const router = express.Router();

const {
  createevent,
  getAllEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");

router.post("/create-event", createevent);
router.get("/getAllEvent", getAllEvent);
router.put("/updateEvent/:id", updateEvent);
router.delete("/deleteEvent/:id", deleteEvent);

module.exports = router;
