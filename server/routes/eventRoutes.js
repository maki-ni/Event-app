const express = require("express");
const router = express.Router();
const Event = require("../models/event");
// router.use(express.json());
//home page of the website
router.get("/event", async (req, res) => {
  try {
    const events = await Event.find();
    const titles = events.map((el) => {
      return el.title;
    });
    res.send(titles);
    console.log(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.redirect("/event");
});

//see the details of each event
router.get("/event/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "create") {
      next();
    }
    const event = await Event.findById(id);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rsvp for specific events
router.post("/event/:id/rsvp", (req, res) => {
  res.json({
    message: "you are now going to rsvp",
  });
});

module.exports = router;
