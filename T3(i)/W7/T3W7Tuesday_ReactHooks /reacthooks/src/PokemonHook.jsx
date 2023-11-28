import { useEffect, useState } from 'react';

export default function PokemonHook(){
    //[variable of state, function to set variable] = useState(initial value of state) 
    let [pokemon, setPokemon] = useState({});
    let [someExampleState, setSomeExampleState] = useState("hello world")

    // Don't do setState in top level of a functional component
    //setPokemon({name: "pikachu"})

    function getPokemon(){
        setPokemon({name: "Charmander"})
    }

    // Runs at the start or on the first render of this component
    // useEffect(cb function, []) is equivalent to componentDidMount
    // Because the dependency array is empty
    useEffect(() => {
        setPokemon({name: "pikachu"})
    },[])

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <h1>{someExampleState}</h1>
            <button onClick={getPokemon}>Get the pokemon!</button>
        </div>
    )
}