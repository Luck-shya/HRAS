const mongoose = require("mongoose");
const dotenv = require("dotenv");

const uri =
  "mongodb+srv://hras12345:hras12345@hras0.bqzljyw.mongodb.net/?retryWrites=true&w=majority&appName=Hras0";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
