const mongoose = require("mongoose");
const { MONGO_URI } = require("./server_config");

async function connectToDb() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully Connected To DB");
  } catch (err) {
    console.log("Unable To Connect To The DB Server");
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectToDb;
