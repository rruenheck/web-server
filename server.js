import express from "express";

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});// step one
// step two
// step three
// checkpoint 1
// checkpoint 2
// checkpoint 3
// BUG: off-by-one introduced here
// checkpoint 4
// checkpoint 5
// stable checkpoint
