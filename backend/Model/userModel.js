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

  lastActive: {
    type: String,
    default: new Date(faker.date.recent(60)).toISOString().split("T")[0],
  },
  totalActiveHour: { type: Number, required: true, default: 0 },
});

const reportSchema = new mongoose.Schema({
  country: Array,
  device: Array,
  gender: Array,
  user: Array,
  active: Array,
});

const User = mongoose.model("User", userSchema);

const Report = mongoose.model("Report", reportSchema);

module.exports = {
  User,
  Report,
};
