const express = require("express");
const cors = require("cors");
const app = express();
const emotionRoutes = require("../src/routes/emotionRoutes")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/emotion',emotionRoutes);

module.exports = app;