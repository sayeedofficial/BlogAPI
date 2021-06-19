const mongoose = require("mongoose");

const Catergory = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Catergory", Catergory);
