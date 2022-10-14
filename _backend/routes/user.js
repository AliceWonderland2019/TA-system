const express = require("express");
const user = require("../models/user");
const student = require("../models/student");
const employee = require("../models/employee");
const router = express.Router();

// create new student account
router.post("/student", async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    await user.createNewUser(body.username, body.password);
    const result = student.createNewStudent(
      body.firstname, 
      body.lastname,
      body.username,
      body.student_id
    );
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to create new user:", err);
    res.status(500).json({ message: err.toString() });
  }
  next();
});

// create new employee account
router.post("/employee", async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    await user.createNewUser(body.username, body.password);
    const result = employee.createNewEmployee(
      body.firstname, 
      body.lastname,
      body.username,
      body.employee_id
    );
    res.status(201).json(result);
  } catch (err) {
    console.error("Failed to create new user:", err);
    res.status(500).json({ message: err.toString() });
  }
  next();
});

module.exports = router;