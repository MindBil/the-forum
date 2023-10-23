const express = require("express");
const fs = require("fs");

const app = express();
const port = 5173;

app.use(express.json());


function loadQuestions() {
  const data = fs.readFileSync("db.json");
  return JSON.parse(data);
}

function saveQuestions(questions) {
  fs.writeFileSync("db.json", JSON.stringify(questions, null, 2));
}

app.get("/api/questions", (req, res) => {
  const questions = loadQuestions().questions;
  res.json(questions);
});

app.post("/api/questions", (req, res) => {
  const newQuestion = req.body;
  const questions = loadQuestions();
  questions.questions.push(newQuestion);
  saveQuestions(questions);
  res.status(201).json(newQuestion);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
