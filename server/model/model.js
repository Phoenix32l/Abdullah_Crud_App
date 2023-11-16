const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    task : {
        type : String,
    },
    notes : {
        type: String,
    }
})

const Taskdb = mongoose.model('taskdb', schema);

module.exports = Taskdb;