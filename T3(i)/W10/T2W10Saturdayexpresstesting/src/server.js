//import express
const express = require('express');

// make an instance of express as a customisable server
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});

module.exports = {
    app, PORT
}

