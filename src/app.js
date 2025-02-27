// import express from "express";

const express = require("express");

const app = express();

app.use("/test", function (req, res) {
  res.send("You are in testing route");
});

app.use("/hello", (req, res) => {
  res.send("Hello!!");
});

app.use("/", function (req, res) {
  res.send("Welcome to the Dashboard!");
});

app.listen(3000, () => {
  console.log("Serer is live at port 3000");
});
