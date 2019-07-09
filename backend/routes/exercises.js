 //29:06

 const router = require('express').Router();
 let Exercise = require('../models/exercise.model');
 
 // Read .../exercises/
 router.route('/').get((req, res)=>{
     Exercise.find()
         .then(exercises => res.json(exercises))
         .catch(err => res.status(400).json('Error: ' + err));
 });
 
 // Create .../exercises/add
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
 
// Read single .../exercises/id

router.route('/:id').get((req, res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

 // Update .../exercises/update

router.route('/update/:id').post((req, res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(()=> res.json('Exercise updated!'))
        .catch(err => res.status(400).json('First Error: ' + err));
    })
    .catch(err => res.status(400).json('Second Error: ' + err));
})

// Delete .../exercises/id

router.route('/:id').delete((req, res) =>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

 module.exports = router;