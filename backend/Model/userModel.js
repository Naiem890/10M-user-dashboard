const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, default: faker.internet.userName() },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: true },
  device: {
    type: String,
    required: true,
    enum: ["Mobile", "Desktop", "Tablet"],
  },

  lastActive: { type: Date, default: Date.now() },
  totalActiveHour: { type: Number, required: true, default: 0 },
});

const countSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  count: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);
const GenderCount = mongoose.model("GenderCount", countSchema);
const CountryCount = mongoose.model("CountryCount", countSchema);
const DeviceCount = mongoose.model("DeviceCount", countSchema);
const UserRank = mongoose.model("UserRank", userSchema);

module.exports = { User, GenderCount, CountryCount, DeviceCount, UserRank };
