//Router and Path
const router = require("express").Router();
const path = require("path");

//Model Requirements
const Workout = require("../models/Workout.js")

//Get Workouts Set
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then( data => {res.json(data)})
        .catch( e => {res.json(e)})
});

//Create New Workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then( data => {res.json(data)})
        .catch( e => {res.json(e)})
});

//Get Ten Most Recent Workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({day:-1}).limit(10)
    .then(data => {
      console.log(data)
      res.json(data);
    })
    .catch(e => {
      res.json(e);
    });
});

//Route to add new exercises to workout
router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } }
      )
        .then(data => {
          res.json(data);
        })
        .catch(e => {
          res.json(e);
        });
    });

//HTML Routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));   
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));   
});
module.exports = router;