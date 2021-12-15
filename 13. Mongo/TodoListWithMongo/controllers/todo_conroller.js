import Todo from "../model/todoSchema.js"

export const getTodoController = async (req, res) => {
  //get data from mongodb and pass it to the view
  try {
    const todos = await Todo.find();
    res.render('todo', { todos: todos })
  } catch (error) {
    console.log(error);
    res.json(error)
  }
}


export const postTodoController = async (req, res) => {
  //post data to mongodb and pass it to the view
  const { item } = req.body;

  console.log(item);

  try {
    const todo = new Todo({
      item: item
    });
    await todo.save();

    res.json(todo)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
}


export const deleteTodoController = async (req, res) => {
  //get data from mongodb and pass it to the view
  const { id } = req.params;

  try {
    const todo = await Todo.deleteOne({ _id: id })
    res.json(todo)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
}