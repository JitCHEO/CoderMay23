import { Component } from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";


// class component
export default class BusinessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            name: "Default Name",
            email: "example@email.com"
        }
    }

    render(){
        return(
            <div>
                <BusinessCardDisplay name={this.state.name} email={this.state.email} />
            </div>
        )
    }
}

// import react from "react"

// class BusinessCardParent extends react.Component {

// }