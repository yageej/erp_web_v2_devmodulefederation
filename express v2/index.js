const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const PORT = 3000;
app.options("*", cors);
const tasks = [
  {
    taskname: "Task # 1",
    tasktype: "Type 2",
  },
  {
    taskname: "Task # 2",
    tasktype: "Type 3",
  },
];
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/api/tasks", (req, res) => {
  res.send(tasks);
  console.log("Files retrived successfully!");
});

app.post("/api/tasks", (req, res) => {
  console.log(req.body);
  if (req.body !== undefined) {
    console.log("Posted!");
  } else console.log("Post Request Failed.....");
});
