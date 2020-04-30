//importing libraries
const mongoose = require('mongoose');

//Creating schema of question
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    //include the array of id's of all options in this questionSchema itself
    options: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Option'
        }
    ]
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

//Exporting module
module.exports = Question;