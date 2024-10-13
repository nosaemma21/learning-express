const express = require("express");
const app = express();
const peopleRouter = require("./routes/people.js");
const loginRouter = require("./routes/auth.js");

// Static assets
app.use(express.static("./methods-public"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
app.use("/api/people", peopleRouter);
app.use("/login", loginRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
