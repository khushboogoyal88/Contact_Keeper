const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB(); // connect Database

app.use(express.json({ extended: false })); // init middleware

app.get("/", (
  req,
  res // all this can be when server is connected
) => res.json({ msg: "Welcome to the ContactKeeper API" }));

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
