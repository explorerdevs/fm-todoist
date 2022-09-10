const mongoose = require("mongoose");
const config = require(".");

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
