import { Component } from "react";


// class function cause the name will change
export default class BusinessCardForm extends Component{
    constructor(props){
        super(props);
    }

    // function
    handleChangeInput = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.props.updateState(event.target.name, event.target.value);
    }


    render(){
        return(
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="nameInput" 
                value={this.props.name}
                onChange={this.handleChangeInput}
                />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="emailInput" 
                value={this.props.email}
                onChange={this.handleChangeInput}
                />
            </form>
        )
    }
}