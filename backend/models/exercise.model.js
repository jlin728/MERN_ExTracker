const mongoose = require('mongoose');

const Schema = mongooseSchema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    }, {
    timestamps: true,   
});

//Add API endpoints to perform CRUD operations  24:02

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;