const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const Event = require("../models/event");
const Admin = require("../models/admin");

const { authenticateToken, adminCheck } = require("../authserver");

router.use(express.urlencoded({ extended: true }));

router.post("/admin/login", adminCheck, async (req, res) => {
  const { userID } = req.body;
  const administrator = await Admin.findOne({ userID });
  const payLoad = { userID: administrator.userID, _id: administrator._id };
  const accessToken = jwt.sign(payLoad, process.env.ACCESS_KEY, {
    expiresIn: "1h",
  });
  res.json({ accessToken: accessToken });
});

router.post("/admin/create", authenticateToken, async (req, res) => {
  try {
    const { userID, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedpass = await bcrypt.hash(password, salt);
    if (!Admin.findOne({ userID })) {
      const admin = new Admin({ userID, password: hashedpass });
      await admin.save();
      return res.status(201).json({ message: "admin is successfully created" });
    } else {
      return res.status(400).json({ message: "admin already exists" });
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

router.delete("/admin/:userID", authenticateToken, async (req, res) => {
  try {
    const { userID } = req.params;
    const deletedAdmin = await Admin.findOneAndDelete({ userID });
    if (!deletedAdmin) {
      return res.status(404).json({ message: "not successful" });
    }

    res.json({ message: "admin deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/event/create", authenticateToken, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
    console.log(req.body);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/event/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.json({ message: "no such event" });
    }
    res.json({ message: deletedEvent.title + " is deleted" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
