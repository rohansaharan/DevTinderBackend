const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: String,
  email: {
    type: String,
  },
  passwrod: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
