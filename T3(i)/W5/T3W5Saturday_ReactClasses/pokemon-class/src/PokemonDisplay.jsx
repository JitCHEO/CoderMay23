import React from "react"

export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);
        this.name = "Pikachu"
        //state stores data per component
        this.state = {
            pokemonName: null
        }
    }
    async componentDidMount(){
        console.log("Did mount triggers after the component was rendered");
        // Generate a random number between 1 and 1017 (number of Pokemons ???)
        function getRandomPokemonId(){
            return Math.floor(Math.random() * 1017) +1;
        }

        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).catch(error => {
            throw new Error("API failure");
        });
    
        if (response.status === "404") {
            throw new Error("API did not have data for the requested ID")
        };
    
        //Convert the response into usable JSON
        let data = await response.json().catch(error => {
            throw new Error("API did not return valid JSON");
        })
        console.log(data.name);
        this.setState({ pokemonName: data.name })
    }

    componentWillUnmount(){
        console.log("Will unmount triggers after the component is unmounted (unlikely in this app)")
    }

    render(){
        if (this.state.pokemonName){
            return(
                <h2>{this.state.pokemonName}</h2>
            )
        } else {
            return(
                <h2>Loading...</h2>
            )
        }
        
    }
    
}