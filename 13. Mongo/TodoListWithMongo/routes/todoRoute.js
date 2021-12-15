import express from "express";
import { deleteTodoController, getTodoController, postTodoController } from "../controllers/todo_conroller.js";
const router = express.Router();

router.get("/", getTodoController)
router.post("/", postTodoController)
router.delete("/:id", deleteTodoController)

// With es5 format
// module.exports = router;

// with es6 format
export default router