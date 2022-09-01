import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@playgroundcluster.0iljkjc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;

let db = {};
db.mongoose = mongoose;
db.url = MONGO_DB_URL;

const DB = db;

export default DB;