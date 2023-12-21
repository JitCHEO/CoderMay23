// Function for authorisation
// if username is not jairo, respond with message
// else, pass along to next function

function checkForJairo(request, response, next){
    // if body data conatins a username and that is not equal to "jairo"
    if (request.body.username != "jairo"){
        response.json({
            message: "You are not authorised"
        })
    } else {
        //moce to the next step in the chain
        next();
    }
}

/*

instance.verb(
    path,
    firstMiddleware,
    checkForJairo, ---> called response.json, end of the route ----> end
    |
    |
    | next()
    otherMiddleware,
    nthMiddleware,
    routeFunctionOrCallback
)
*/

module.exports = {
    checkForJairo
}