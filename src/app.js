// import express from "express";

const express = require("express");

const { adminAuth } = require("./middleware/auth.js");
const app = express();

// app.use("/admin", (req, res, next) => {
//   console.log("Inside Admin middleware");
//   const token = "xyz";
//   const isAuthorizedUser = token === "xyz";
//   if (!isAuthorizedUser) {
//     res.status(401).send("Unauthorized Request");
//   } else {
//     next();
//   }
// });

// app.use("/admin", adminAuth);

app.get("/admin/getAllUser", adminAuth, (req, res, next) => {
  try {
    throw new Error("cdsfdsbfj");
    res.send("All user Data");
  } catch (err) {
    res.status(501).send("Something went wrong");
  }
});

app.get("/admin/deleteAllUser", adminAuth, (req, res, next) => {
  throw new Error("dfnjfdror");
  res.send("Deleted all user");
  next();
});

// Error Handling middleware
app.use("/", (err, req, res, next) => {
  console.log("from / route");
  if (err) {
    res.status(501).send("Some New Error");
    console.log(err);
  }
});

app.get("/admin/Language", (req, res) => {
  res.send("Admin's Lang");
});

app.get(
  "/person",
  (req, res, next) => {
    // next();
    // res.send("Response!!");
    next();
    // console.log("Hi from response");
  },
  (req, res, next) => {
    next();
    // res.send("Response 2!!");
  },
  [
    (req, res, next) => {
      next();
      // res.send("Response 3!!");
      console.log("res 3");
    },
    (req, res, next) => {
      // next();
      res.send("Response 4!!");
      // console.log("dsbfjb");
      // next();
    },
  ]
);

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

app.get("/test/abc", function (req, res) {
  res.send("You are in testing route app.test");
});
app.use("/test", function (req, res) {
  res.send("You are in testing route app.use");
});

app.listen(3000, () => {
  console.log("Serer is live at port 3000");
});
