const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const { name, email, age, gender, text } = req.body;
  console.log(req.body);
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log("server is running at http://localhost:5000");
});
