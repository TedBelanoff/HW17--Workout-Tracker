//Workout Schema

//Requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require('moment');

//Schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: moment(new Date)
},
  exercises: [
    {
        name : {type:String}, 
        type : {type:String}, 
        weight : {type:Number}, 
        sets : {type:Number}, 
        reps : {type:Number}, 
        duration : {type:Number},
        distance : {type:Number}
    }
  ]
});

//Sum of Duration Method
WorkoutSchema
.virtual("totalDuration")
.get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

//Formatting Requirement
WorkoutSchema.set('toJSON', {virtuals:true});

//Mongoose Model
const Workout = mongoose.model("Workout", WorkoutSchema);

//Module Export
module.exports = Workout;