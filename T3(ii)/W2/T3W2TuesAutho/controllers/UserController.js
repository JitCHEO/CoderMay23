const express = require("express");

const router = express.Router();

//get all the users from the DB
//localhost:3000/users/
/**
 * [
 *  {
 *      userID:
 *      username: 
 *  },
 * {
 *      userID:
 *      username: 
 *  },
 * {
 *      userID:
 *      username: 
 *  },
 * ]
 */
router.get("/", async (request, response) =>{
    return null
})

// get a user by id from the DB
//localhost:3000/users/234135123123
/**
 * {
 *      userID:
 *      username: 
 *  }
 */
router.get("/:id", async (request, response) => {
    return null
})

// create a new user in the DB
//localhost:3000/users/signup
// request.body = {username: "admin", password:"password1"}
//respond with {jwt: ef23rf24f23e23efqegt24g2wegfq23}
router.post("/signup", async (request, response) => {
    return null;
})

//log in the user
//localhost:3000/users/login
// request.body = {username: "admin", password:"password1"}
//respond with {jwt: ef23rf24f23e23efqegt24g2wegfq23}
router.post("/login", async (request, response) => {
    return null;
})

//localhost:3000/users/verify
// JWT in request.headers["jwt"] or request.header["authorization"]
//respond with {jwt: ef23rf24f23e23efqegt24g2wegfq23}
router.get("/verify", async(request, response) =>{
    return null;
})

// JWT in request.headers["jwt"] or request.header["authorization"]
//respond with {jwt: ef23rf24f23e23efqegt24g2wegfq23}
router.get("/regenerate", async(request, response) =>{
    return null;
})
