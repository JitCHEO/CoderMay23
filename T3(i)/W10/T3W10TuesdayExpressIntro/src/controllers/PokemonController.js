const express = require('express');

//create an instance of the Express router
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Hello world from a router!"
    });
})

router.get("/pikachu", async (request, response) => {
    let result = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    let data = await result.json();

    response.json({
        message: "A pokemon from the API, what's your name?",
        pokemonName: data.name
    })
})

router.post('/', (req, res) => {
    res.json({
        message: "POST request received!"
    })
})

module.exports = router;