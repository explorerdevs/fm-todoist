require("dotenv").config({ path: "./config/.env" });

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  PORT,
  MONGODB_URI,
};
