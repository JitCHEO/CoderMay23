const express = require('express');

//create an instance of the Express router
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Hello world from a router!"
    });
})

router.post('/', (req, res) => {
    res.json({
        message: "POST request received!"
    })
})

module.exports = router;