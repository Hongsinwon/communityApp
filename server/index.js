const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const config = require("./config/key.js");

// build파일 불러오기
app.use(express.static(path.join(__dirname, "../client/build"))); //__dirname => 현재 경로
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./Router/post.js"));
app.use("/api/user", require("./Router/user.js"));
app.use("/api/reple", require("./Router/reple.js"));

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
