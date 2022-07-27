const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: true },
  device: {
    type: String,
    required: true,
    enum: ["Mobile", "Desktop", "Tablet"],
  },

  lastActive: { type: Date },
  totalActiveHour: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
