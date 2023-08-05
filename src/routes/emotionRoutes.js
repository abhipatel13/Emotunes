const express = require("express");
const emotionController = require("../controllers/emotionController");
const router = express.Router();

router.post('/detect',emotionController.detectEmotion);

module.exports = router;