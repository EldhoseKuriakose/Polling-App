//importing libraries
const mongoose = require('mongoose');


//Creating Schema of options
const optionSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.ObjectId,
        ref: 'Question'
    },
    option: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    },
    link_to_vote: {
        type: String
    }
}, {
    timestamps: true
});

const Option = mongoose.model('Option', optionSchema);

//Exporting module
module.exports = Option;

