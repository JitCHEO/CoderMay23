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

//GET /pokemon/25 -> 25 as a pokemonId, can be a different one
router.get("/:pokemonId", async (request, response) => {
    let pkId = request.params.pokemonId;
    let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pkId);
    let data = await result.json();

    response.json({
        pokemonName: data.name
    })
})

//POST /pokemon
router.post("/", async (request, response) => {
    
    if (request.body.username != "jairo"){
        return response.json({
            message: "You are not authorised"
        })
    }
    // let pkId = request.params.pokemonId;
    let pkId = request.body.pokemonId;
    let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pkId);
    let data = await result.json();

    response.json({
        pokemonName: data.name,
        username: request.body.username,
        pokemonId: request.body.pokemonId
    })
})

router.post('/', (req, res) => {
    res.json({
        message: "POST request received!"
    })
})

module.exports = router;