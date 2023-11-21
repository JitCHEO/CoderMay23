import React from "react";

export default class Pokemon extends React.Component{
    constructor(){
        super();

        this.state = {
            pokemonData: {}
        }
    }

    render(){
        return this.state.pokemonData.name ?
        (
            <div>
                <h1>Pokemon data found!</h1>
            </div>
        )
        :
        (
            <div>
                <h1>Still loading Pokemon data...</h1>
            </div>
        )

    }

}

