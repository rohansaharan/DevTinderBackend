const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  continent: String,
  jersyColor: String,
  trophies: Number,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = {
  Team,
};
