import cors from "cors";
import express from "express";
import useragent from "express-useragent";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from 'url';

import DB from "./db.config.js";

import { BlogPost } from "./src/routes/index.js";
import { ImageUploader } from "./src/routes/imageUploader.route.js";

// const date = new Date();
// console.log(Date.now());

dotenv.config();
const app = express();

let corsOptions = {
    optionsSuccessStatus: 200,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', path.join(__dirname, '/public/images'));

app.use(express.json());
app.use(cors(corsOptions));
app.use(useragent.express());
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));

DB.mongoose
    .connect(DB.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log("Can't connect to database", error);
    });

app.get("/playground", (req, res) => {
    res.status(200).send("!!! NODEJS BACKEND PLAYGROUND WITH MONGODB !!!");
});

BlogPost(app);
ImageUploader(app);

app.listen(process.env.PORT, () => {
    console.log(`App Running on: http://localhost:${process.env.PORT}`);
});