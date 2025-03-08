// import express from "express";

const express = require("express");

const { connectDB } = require("./config/database.js");

const { adminAuth } = require("./middleware/auth.js");

const { User } = require("./model/user.js");
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

// app.get("/admin/getAllUser", adminAuth, (req, res, next) => {
//   try {
//     throw new Error("cdsfdsbfj");
//     res.send("All user Data");
//   } catch (err) {
//     res.status(501).send("Something went wrong");
//   }
// });

// app.get("/admin/deleteAllUser", adminAuth, (req, res, next) => {
//   throw new Error("dfnjfdror");
//   res.send("Deleted all user");
//   next();
// });

// // Error Handling middleware
// app.use("/", (err, req, res, next) => {
//   console.log("from / route");
//   if (err) {
//     res.status(501).send("Some New Error");
//     console.log(err);
//   }
// });

// app.get("/admin/Language", (req, res) => {
//   res.send("Admin's Lang");
// });

// app.get(
//   "/person",
//   (req, res, next) => {
//     // next();
//     // res.send("Response!!");
//     next();
//     // console.log("Hi from response");
//   },
//   (req, res, next) => {
//     next();
//     // res.send("Response 2!!");
//   },
//   [
//     (req, res, next) => {
//       next();
//       // res.send("Response 3!!");
//       console.log("res 3");
//     },
//     (req, res, next) => {
//       // next();
//       res.send("Response 4!!");
//       // console.log("dsbfjb");
//       // next();
//     },
//   ]
// );

// app.get("/abc/:xyz/:qwe", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send("Hi from abc");
// });

// app.get("/user", (req, res) => {
//   res.send("Fetched User Info Successfully!!");
// });

// app.post("/user", (req, res) => {
//   res.send("Post user data Successfully!!");
// });

// app.patch("/user", (req, res) => {
//   res.send("Updated user Info Successfully!");
// });

// app.delete("/user", function (req, res) {
//   res.send("Deleted user Info Successfully!!");
// });

// app.get("/test/abc", function (req, res) {
//   res.send("You are in testing route app.test");
// });
// app.use("/test", function (req, res) {
//   res.send("You are in testing route app.use");
// });

//Api for posting data into the db-

// app.post("/signup", async (req, res) => {
//   const user = new User({
//     firstName: "Harry",
//     lastName: "Potter",
//     email: "harry@gmail.com",
//     passwrod: "aedef",
//   });
//   try {
//     await user.save();
//     res.send("Data saved in the DB successfully");
//   } catch (err) {
//     res.status(400).send("Error ocuured in saving data to DB" + err.message);
//   }
// });

// sending dynamic data to db coming from postman(or client or browser)
//first we need to convert the JSON data which is sent from the Postman to js object, and for that there is a
// built in function in express called express.json(), so we need to create a middlewarer for it.

app.use(express.json()); // this is a middleware which converts the JSON to js object

app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = new User(req.body);
  try {
    await user.save();
    res.send("Data stored Successfully in the DB!!");
  } catch (err) {
    res.status(400).send("Error in saving data" + err.message);
  }
});

// getting the data from the DB

// getting user with a particular email
app.get("/user", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  try {
    const user = await User.find({ email: email });
    // const user = await User.find({ email: email }, "firstName lastName"); // This will give fisrt and last name form matching data
    // console.log(typeof user);
    if (user.length === 0) {
      res.status(404).send("Data not found!!");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("Something Went Wrong" + err.message);
  }
});

//getting all the data from a particular collection

app.get("/feed", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// getting data by id

app.get("/id", async (req, res) => {
  const id = req.body._id;
  try {
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      res.status(404).send("No Data Found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("Something went wrong!!" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connectd Successfully");
    app.listen(3000, () => {
      console.log("Serer is live at port 3000");
    });
  })
  .catch((err) => {
    console.error("Connection with DB failed");
  });
