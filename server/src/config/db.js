const mongoose = require("mongoose");

const mongoDbUrl = process.env.MONGO_DB_URL;

const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
