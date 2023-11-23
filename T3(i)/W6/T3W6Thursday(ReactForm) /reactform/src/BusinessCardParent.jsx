import { Component } from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";

class BusinessCardParent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <BusinessCardDisplay />
            </div>
        )
    }
}

// import react from "react"

// class BusinessCardParent extends react.Component {

// }