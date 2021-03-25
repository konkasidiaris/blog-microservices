const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === " CommentCreated") {
    const { id, content, postId } = data;

    const post = post[postId];
    post.comments.push({ id, content });
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
