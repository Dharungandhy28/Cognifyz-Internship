const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("", require("./routes/user_route"));

app.listen(port, () => {
  console.log("server is running at http://localhost:5000");
});
