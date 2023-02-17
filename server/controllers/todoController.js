const Todo = require("../models/Todo");

const getAllTodos = (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
};

const getTodo = (req, res) => {
  console.log("params =>", req.params.todoId);
  const id = req.params.todoId;
  Todo.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Todo not found" });
      }
      res.status(200).json({ result });
    })
    .catch((error) => res.status(500).json({ error: "Todo not found" }));
};

const createTodo = (req, res) => {
  Todo.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ error: error.message }));
};

const updateTodo = async (req, res) => {
  const id = req.params.todoId;
  Todo.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Todo not found" });
      }
      res.status(200).json("Item updated");
    })
    .catch((error) => res.json(error));
};

const deleteTodo = (req, res) => {
  const id = req.params.todoId;
  Todo.findByIdAndDelete(id)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
