const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const {
  User,
  GenderCount,
  CountryCount,
  DeviceCount,
  UserRank,
} = require("./Model/userModel");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! working mannn!!!");
});

mongoose.connect(
  "mongodb://dbuser:WEzw1PIIYT56Sfjo@cluster0-shard-00-00.dtoqy.mongodb.net:27017,cluster0-shard-00-01.dtoqy.mongodb.net:27017,cluster0-shard-00-02.dtoqy.mongodb.net:27017/?ssl=true&replicaSet=atlas-qvxysw-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "UserDB",
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const rebuild = async () => {
  try {
    await User.aggregate([
      { $sortByCount: "$country" },
      { $limit: 10 },
      { $out: "countrycounts" },
    ]);

    await User.aggregate([
      { $sortByCount: "$device" },
      { $out: "devicecounts" },
    ]);
    await User.aggregate([
      { $sortByCount: "$gender" },
      { $out: "gendercounts" },
    ]);
    await User.aggregate([
      { $sort: { totalActiveHour: -1 } },
      { $limit: 10 },
      { $out: "userranks" },
    ]);

    console.log("aggregation successful");
  } catch (err) {
    console.log("Aggregation Failed", err);
  }
};

app.get("/report", async (req, res) => {
  const gender = await GenderCount.find({});
  const country = await CountryCount.find({});
  const device = await DeviceCount.find({});
  const user = await UserRank.find({});
  const report = { gender, country, device, user };
  res.send(report);
});

app.post("/user", async (req, res) => {
  console.log(req.body);
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
