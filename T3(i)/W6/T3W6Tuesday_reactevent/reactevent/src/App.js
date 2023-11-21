// Page that lets us increase or decrease 
// How many Pokemon are on screen
// App component needs to:
// - Keep track of how many Pokemon to show
// - Iterate over a single, DRY modular component
// - Button to increase Pokemon count
// - Button to decrease Pokemon count
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    
      // start with at least one pokemon on screen
      this.state = {
        pokemonCount: 1
      }
  }

  render(){
    return(
      <div>
        <h1>Pokemon page</h1>
      </div>      
    )
  }
}

export default App;
