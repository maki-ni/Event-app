require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.once("open", () => console.log("connected"));
db.on("error", (err) => console.log(err));

const eventRoutes = require("./routes/eventRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for events
app.use(eventRoutes);

//admin only parts
app.use(adminRoutes);

//for 404 case
app.use("/404", (req, res) => {
  res.status(404);
  res.send("You're not on the correct site");
});
app.listen(3000, () => {
  console.log("listening");
});
