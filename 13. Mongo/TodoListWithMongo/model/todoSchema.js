//Create a schema -- This is like a blueprint
import mongoose from "mongoose"

var todoSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
}, {
  timestamps: true
});

//creating a model
var Todo = mongoose.model('Todo', todoSchema);
export default Todo