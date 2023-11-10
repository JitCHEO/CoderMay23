// const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

// Option 1
// async function getRandomPokemonAsync(){
//     let id = Math.floor(Math.random() * 1017) + 1;
//     let response = await fetch(API_BASE_URL + id);
//     let data = await response.json();
//     console.log(data.name);
//     //get the h1 and the image from the html
//     let pkmName = document.getElementById("pokemonName");
//     let pkmImage = document.getElementById("pokemonImage");
//     // add the data we got from the API to the elements
//     pkmName.innerText = data.name;
//     pkmImage.src = data.sprites.other["official-artwork"].front_default;
//     pkmImage.alt = "Image showing" + data.name;
// }

// Option 2(try/catch & 2 Await)
async function getRandomPokemonAsync(){
    let id = Math.floor(Math.random() * 1017) + 1;
    try{
        let response = await fetch(API_BASE_URL + id);
        let data = await response.json();
    }catch (error) {
        console.log(error);
    }

    // Await & .then
    let oneLinerData = await fetch(API_BASE_URL + id).then(response => response.json()).catch(error => console.log(error));
    
    //get the h1 and the image from the html
    let pkmName = document.getElementById("pokemonName");
    let pkmImage = document.getElementById("pokemonImage");
    // add the data we got from the API to the elements
    pkmName.innerText = oneLinerData.name;
    pkmImage.src = oneLinerData.sprites.other["official-artwork"].front_default;
    pkmImage.alt = "Image showing" + oneLinerData.name;
}