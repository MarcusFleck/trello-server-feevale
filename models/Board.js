var mongoose = require('mongoose');
var Task = require('./Task.js');

var BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    tasks: [Task.schema],
    created_at: {type: Date, default: Date.now}

});

module.exports = mongoose.model("Board", BoardSchema)