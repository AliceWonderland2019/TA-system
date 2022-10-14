const express = require("express");
const bodyParser = require("body-parser");
const logMiddleware = require("./middleware/log");
const userRoutes = require("./routes/user");
const sessionRoutes = require("./routes/session");
const healthRoute = require("./routes/health");
const employeeRoutes = require("./routes/employee");
const studentRoutes = require("./routes/student");
const cors = require('cors');

// create the express.js object
const app = express();
app.use(bodyParser.json());
app.use(logMiddleware);
app.use(cors());

// set up port
const port = process.env.PORT || 8000;

// include authentification middleware
const {
  authenticateJWT,
  authenticateWithClaims,
} = require("./middleware/auth");

//include routes
app.use("/health", healthRoute);
app.use("/user", userRoutes);
app.use("/session", sessionRoutes);
// app.use('/employee', authenticateWithClaims(['employee']), employeeRoutes);
app.use("/student", authenticateWithClaims(["student"]), studentRoutes);

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
