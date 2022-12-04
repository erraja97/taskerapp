//import dotenv
require("dotenv").config();
//import express
const express = require("express");
const app = express();
//importing TaskerRouter
const TaskerRouter = require("./routes/TaskerRouter");

//using TaskerRouter
app.get("/", TaskerRouter);

//exporting this app
module.exports = app;
