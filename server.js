//Express and Mongoose Requirements
const express = require("express");
const mongoose = require("mongoose");

//Routes Requirement
const routes = require("./routes/index.js");

const PORT = process.env.PORT || 3000;
const app = express();

//Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

//Create/Connect MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });

//Confirmation Message
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
