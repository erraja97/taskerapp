//import express and router
const express = require("express");
const router = express.Router();
//importing controller.js
const { home } = require("../controllers/TaskerControllers");

//creating home route
router.get("/", home);

module.exports = router;
