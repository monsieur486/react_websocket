const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

router.get("/ping", (req, res) => {
    res.send({ response: "ping" }).status(200);
});

module.exports = router;