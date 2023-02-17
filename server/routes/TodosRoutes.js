const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getAllTodos);
router.get("/:todoId", getTodo);
router.post("/new", createTodo);
router.put("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
