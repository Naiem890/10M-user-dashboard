const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const User = require("./Model/userModel");

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
      { $out: "countryCount" },
    ]);

    await User.aggregate([
      { $sortByCount: "$device" },
      { $out: "deviceCount" },
    ]);
    await User.aggregate([
      { $sortByCount: "$gender" },
      { $out: "genderCount" },
    ]);

    console.log("aggregation successful");
  } catch (err) {
    console.log("Aggregation Failed", err);
  }
};

app.get("/report", async (req, res) => {
  await rebuild();

  res.send("hellooo");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
