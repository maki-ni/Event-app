const express = require("express");
const Admin = require("./models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminCheck = async (req, res, next) => {
  try {
    const { userID, password } = req.body;

    const admin = await Admin.findOne({ userID });
    if (!bcrypt.compare(password, admin.password)) {
      return res.status(401).json({
        message: "hoe this admin doesn't exist",
      });
    }

    next();
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.redirect("/login");
  }
  jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
    if (err) return res.send("there's a huge error");
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken, adminCheck };
