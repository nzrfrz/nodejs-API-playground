// import cors from "cors";
// import express from "express";
// import dotenv from "dotenv";
// import DB from "./db.config.js";

const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const { DB } = require("./db.config.js");

dotenv.config();
const app = express();

let corsOptions = {
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
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

app.get("/", (req, res) => {
    res.send("!!! NODEJS BACKEND WITH MONGO DATABASE PLAYGROUND !!!")
});

app.listen(process.env.APP_PORT, () => {
    console.log(`App Running on: http://localhost:${process.env.APP_PORT}`);
});