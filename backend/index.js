const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const { User, Report } = require("./Model/userModel");
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "UserDB",
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const rebuild = async () => {
  let today = new Date();
  let lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);
  let lastMonthFromToday = new Date();
  lastMonthFromToday.setMonth(today.getMonth() - 1);

  today = today.toISOString().split("T")[0];
  lastWeek = lastWeek.toISOString().split("T")[0];
  lastMonthFromToday = lastMonthFromToday.toISOString().split("T")[0];

  console.log(today, lastWeek, lastMonthFromToday);

  try {
    const country = await User.aggregate([
      { $sortByCount: "$country" },
      { $limit: 10 },
    ]);

    const device = await User.aggregate([{ $sortByCount: "$device" }]);
    const gender = await User.aggregate([{ $sortByCount: "$gender" }]);
    const user = await User.aggregate([
      { $sort: { totalActiveHour: -1 } },
      { $limit: 10 },
    ]);
    const active = await User.aggregate([
      {
        $group: {
          _id: null,
          lastWeek: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $gte: ["$lastActive", lastWeek] },
                    { $lte: ["$lastActive", today] },
                  ],
                },
                1,
                0,
              ],
            },
          },
          lastMonth: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $gte: ["$lastActive", lastMonthFromToday] },
                    { $lte: ["$lastActive", today] },
                  ],
                },
                1,
                0,
              ],
            },
          },
          lastDay: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $gte: ["$lastActive", today] },
                    { $lte: ["$lastActive", today] },
                  ],
                },
                1,
                0,
              ],
            },
          },
          all: { $sum: 1 },
        },
      },
    ]);

    const report = { country, device, gender, user, active };

    await Report.create(report, function (err, docs) {
      if (err) {
        console.error(err);
      }
      console.log(docs);
    });

    console.log("aggregation successful");
  } catch (err) {
    console.log("Aggregation Failed", err);
  }
};

app.get("/report", async (req, res) => {
  const report = await Report.find({});
  res.send(report);
});

app.post("/user", async (req, res) => {
  // console.log(req.body);
  const response = {};

  await User.create(req.body, function (err, docs) {
    if (err) {
      response.error = { err };
    }
    response.message = { docs };
  });
  await rebuild();
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
