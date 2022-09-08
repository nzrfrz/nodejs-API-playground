import dotenv from "dotenv";
import mongoose from "mongoose";

import { BlogPostInit } from "./src/models/blogPost/blogPost.model.js";

dotenv.config();

const MONGO_DB_URL = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

let db = {};
db.mongoose = mongoose;
db.url = MONGO_DB_URL;

db.blog_posts = BlogPostInit(mongoose);

const DB = db;

export default DB;