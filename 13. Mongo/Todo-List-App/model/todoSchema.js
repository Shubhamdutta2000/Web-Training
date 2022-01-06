//Create a schema -- This is like a blueprint
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    item :  {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      }
});

//creating a model
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo