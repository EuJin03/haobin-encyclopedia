import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import facts from "./data/facts.js";

import Fact from "./model/factModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Fact.deleteMany();

    await Fact.insertMany(facts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Fact.deleteMany();

    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
