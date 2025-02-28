// import express from "express";

const express = require("express");

const app = express();

app.get("/abc/:xyz/:qwe", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Hi from abc");
});

app.get("/user", (req, res) => {
  res.send("Fetched User Info Successfully!!");
});

app.post("/user", (req, res) => {
  res.send("Post user data Successfully!!");
});

app.patch("/user", (req, res) => {
  res.send("Updated user Info Successfully!");
});

app.delete("/user", function (req, res) {
  res.send("Deleted user Info Successfully!!");
});

app.use("/test", function (req, res) {
  res.send("You are in testing route");
});

app.listen(3000, () => {
  console.log("Serer is live at port 3000");
});
