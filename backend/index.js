const express = require("express");
const { createTodo, updateTodo } = require("./Validation.js");
const { todo } = require("./db");
const app = express();
const PORT = 3000;
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

//GET LISTS

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos
  });
});

//UPDATE STATE
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Backend Ready at ${PORT}`);
});
