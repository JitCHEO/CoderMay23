const express = require('express');
const {checkForJairo} = require('./PokemonMiddleware');
const {body, validationResult} = require('express-validator');

//create an instance of the Express router
const router = express.Router();

//if defined here, it applies to all the routes below
// router.use(checkForJairo);

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

//if defined here, it applies to all the routes below
// router.use(checkForJairo);

//POST /pokemon
router.post(
    "/", //path
    body('username').trim().isLength({min: 3, max: 9}), // express validator
    //checkForJairo, //middleware 
    async (request, response) => { //cb function that handles response
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            return response.json({
                message: "Wrong length from username",
                errors: errors.array()
            })
        }
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