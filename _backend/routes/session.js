const express = require("express");
const User = require("../models/user");
const student = require("../models/student");
const employee = require("../models/employee");
const { authenticateJWT } = require("../middleware/auth");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const accessTokenSecret = "mysupercoolsecret";
    let accessToken;
    const user = await User.authenticateUser(body.username, body.password);
    if (user === null) {
       return res.status(401).json({message: "Wrong username&password"});
    }
    const students = await student.findUserByUsername(body.username);
    const employees = await employee.findUserByUsername(body.username);
    if (students.length == 0) {
      accessToken = jwt.sign(
        { ...employees[0], claims: ["employee"] },
        accessTokenSecret
      );
    } else
      accessToken = jwt.sign(
        { ...students[0], claims: ["student"] },
        accessTokenSecret
      );
    result = accessToken;
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to authenticate user:", err);
    res.status(401).json({ message: err.toString() });
  }
  next();
});

router.get("/", authenticateJWT, async (req, res, next) => {
  try {
    const user = req.user;
    const result = await User.findUserByUsername(user.username);
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to load current user:", err);
    res.sendStatus(500).json({ message: err.toString() });
  }
  next();
});

module.exports = router;
