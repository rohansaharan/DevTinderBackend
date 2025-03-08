const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://saharanrohan:Qwerty%4012345@nodejs.hdrgj.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};
