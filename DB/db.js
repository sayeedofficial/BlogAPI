const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURL =
  "mongodb+srv://sayeed:blognode123@cluster0.a0n83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log("Connection to DB is successfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
