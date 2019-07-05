 //29:06

 const router = require('express').Router();
 let Exercise = require('../models/exercise.model');
 
 // Read .../exercise/
 router.route('/').get((req, res)=>{
     Exercise.find()
         .then(exercises => res.json(exercises))
         .catch(err => res.status(400).json('Error: ' + err));
 });
 
 // Create .../exercise/add
 router.route('/add').post((req, res)=>{
     const username = req.body.username;
     const description = req.body.description;
     const duration = Number(req.body.duration);
     const date = Date.parse(req.body.date);

     const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
 
     newExercise.save()
     .then(()=> res.json('Workout added!'))
     .catch(err => res.status(400).json('Error: ' +err));
 });
 
 module.exports = router;