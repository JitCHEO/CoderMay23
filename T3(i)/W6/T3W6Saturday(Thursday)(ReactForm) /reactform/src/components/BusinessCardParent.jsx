import { Component } from "react"
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            name: "Default Name",
            email: "example@email.com",
            editMode: false
        }
    }

    updateState = (stateKeyId, newStateValue) => {
        if (Object.keys(this.state).includes(stateKeyId)){
            if (stateKeyId === "name"){
                // add name validation here
            } else if (stateKeyId === "email"){
                // add email validation here
            }
        this.setState({
            [stateKeyId]: newStateValue
        })
        } else{
            console.warn("Incorrect key for the state")
        }
    }

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render(){
       
        return(
            <div>
                {/* ternary operator */}
                {
                    this.state.editMode ? 
                        <BusinessCardForm 
                        name={this.state.name} 
                        email={this.state.email}
                        updateState={this.updateState}
                        />
                    : <BusinessCardDisplay name={this.state.name} email={this.state.email} />
                }

                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
            </div>
            
        )
          
    }


    // Below repeated <div> & onClick twice, top option is DRY.
    // render(){
    //     if (this.state.editMode) {
    //         return(
    //             <div>
    //             <BusinessCardForm 
    //                 name={this.state.name} 
    //                 email={this.state.email}
    //                 updateState={this.updateState}
    //                 />  
    //                 <button onClick = {this.toggleEditMode}>Toggle Edit Mode</button>                  
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //             <BusinessCardDisplay name={this.state.name} email={this.state.email} />   
    //             <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>                                
    //             </div>

    //         )
    //     }      
    // }

}

// import react from "react"

// class BusinessCardParent extends react.Component {

// }