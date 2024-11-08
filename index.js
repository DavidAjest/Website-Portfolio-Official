const path = require("path");

const express = require("express");
const methodOverride = require("method-override");
const app = express();
const { v4: uuid } = require("uuid"); //For generating ID's

// To 'fake' put/patch/delete requests:
app.use(methodOverride("_method"));
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// making data base
let comments = [
  {
    id: uuid(),
    username: "Tom",
    comment: "Yo Thats my first time using RestfulAPIs",
  },
  {
    id: uuid(),
    username: "Ron",
    comment: "Im also a wizard harry!",
  },
  {
    id: uuid(),
    username: "onlywoof",
    comment: "woof woof",
  },
];

app.get("/", (req, res) => {
  let firstName = "David";
  res.render("home", { firstName });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
// **********************************
// NEW - renders a form
// **********************************
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// **********************************
// CREATE - creates a new comment
// **********************************
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});
// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get("/comments/:id", (req, res) => {
  let { id } = req.params; // the :id part means that the property called "id"
  let chosenCommentById = comments.find((comment) => id === comment.id);
  res.render("comments/show", { chosenCommentById });
});

// EDIT
// EDIT - renders a form to edit a comment
// *******************************************
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});
// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);

  //get new text from req.body
  const newCommentText = req.body.comment;
  //update the comment with the data from req.body:
  foundComment.comment = newCommentText;
  //redirect back to index (or wherever you want)
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});

// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment
