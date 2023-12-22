// Test the routes from server.js

const {app} = require("../src/server");

//import supertes so we can manage the app/server in tests properly
const request = require('supertest');

describe("Server root route exists and returns hello world", ()=> {
    test("Root route exists and returns status 200", async ()=>{
        const responseResult = await request(app).get("/");
        expect(responseResult.statusCode).toEqual(200);
    })
    test("Root route exists and returns hello world as a message", async ()=>{
        const response = await request(app).get("/");
        expect(response.body.message).toEqual("Hello world!");
    });
});

describe("Server route which doesn't exist returns 404", ()=>{
    test("/welcome route return 404 not found", async ()=>{
        const responseResult = await request(app).get("/welcome");
        expect(responseResult.statusCode).toEqual(404);
    })
});