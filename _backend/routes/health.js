const express = require("express");
const router = express.Router();

// health route
router.get("/", async (req, res, next) => {
  try {
    const responseBody = { status: "up"};
    res.json(responseBody);
  } catch (err) {
    console.error("Health route failed:", err);
    res.status(500).json({message: err.toString()});
  }
  next();
});

module.exports = router;
