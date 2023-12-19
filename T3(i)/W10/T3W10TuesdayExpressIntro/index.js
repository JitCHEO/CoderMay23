// console.log("hey everyone, server WIP...");
//import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();

// write the routes
//GET localhost:3000/
// app.get(route path, callback function to handle request and response)
app.get('/', (request, response) => {
    response.send("Hello world, server building in progress...")
})

// Configure the server

// Activate the server
app.listen(3000,()=> {
    console.log("Server is running on port 3000");
})
