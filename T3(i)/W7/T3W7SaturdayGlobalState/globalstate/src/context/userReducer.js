export const userReducer = (previousState, instructions) => {
    let newState = {...previousState}
    console.log(instructions)
    switch (instructions.type){
        case "setJwt":
            newState = instructions.data;
            return newState;
        case "login":
            newState = "Pretend a fetch request finished and returned a JWT";
            return newState;
        case "logout":
            // newState = '';
            // return newState;
            return '';
        default:
            return newState;
    }
}