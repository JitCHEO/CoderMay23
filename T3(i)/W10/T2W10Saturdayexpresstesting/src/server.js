//import express
const express = require('express');

// make an instance of express as a customisable server
const app = express();

const PORT = process.env.PORT || 3000;

//cofiguration goes here
app.use(express.json());
// Router go below

app.get("/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});

app.post("/", (request, response)=> {
    // Just copy what the posted data is
    // Attach it to response.body.received
    response.json({
        received: request.body.message
    })
})

module.exports = {
    app, PORT
}

