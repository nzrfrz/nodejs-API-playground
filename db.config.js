// import dotenv from "dotenv";
// import mongoose from "mongoose";

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const MONGO_DB_URL = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

let db = {};
db.mongoose = mongoose;
db.url = MONGO_DB_URL;

const DB = db;

module.exports = {
    DB,
}

// export default DB;