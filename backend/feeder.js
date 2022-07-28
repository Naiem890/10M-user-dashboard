const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const { User } = require("./Model/userModel");
require("dotenv").config();

let i = 1000000;

const deviceArray = ["Mobile", "Desktop", "Tablet"];
const users = [];
while (i--) {
  const user = {
    userId: faker.internet.userName(),
    fullName: faker.name.findName(),
    email: faker.internet.email(),
    country: faker.address.country(),
    gender: faker.name.gender(true),
    device: deviceArray[Math.floor(Math.random() * (3 - 0))],
    lastActive: new Date(faker.date.recent(60)).toISOString().split("T")[0],
    totalActiveHour:
      Math.floor(Math.random() * (10000 - 0)) +
      Math.floor(Math.random() * (10000 - 0)),
  };
  users.push(user);
}

mongoose.connect(
  "mongodb://dbuser:WEzw1PIIYT56Sfjo@ac-mlgslpm-shard-00-00.tokopnj.mongodb.net:27017,ac-mlgslpm-shard-00-01.tokopnj.mongodb.net:27017,ac-mlgslpm-shard-00-02.tokopnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-10ktn3-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "UserDB",
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async function () {
  console.log("Connected successfully");
  // console.log(users);
  await User.insertMany(users, function (err, docs) {
    if (err) {
      return console.log(err);
    }
    return console.log(docs);
  });
});
