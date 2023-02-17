const express = require("express");

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/TodosRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());
const uri = process.env.MONGO_URI;

const port = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`marche sur le port ${port}`);
});
