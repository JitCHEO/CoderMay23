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
        console.log("from parent " + newStateValue)
        this.setState({
            [stateKeyId]: newStateValue
        })
    }

    render(){
        if (this.state.editMode) {
            return(
                <BusinessCardForm 
                    name={this.state.name} 
                    email={this.state.email}
                    updateState={this.updateState}
                    />
            )
        } else {
            return (
                <BusinessCardDisplay name={this.state.name} email={this.state.email} />
            )
        }      
    }

}

// import react from "react"

// class BusinessCardParent extends react.Component {

// }