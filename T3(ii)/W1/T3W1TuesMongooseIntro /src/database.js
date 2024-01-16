const mongoose = require('mongoose');

/**
 * connect or create & connect to a database
 */

async function databaseConnect(){
    try{
        //DB connection can take some time, especially if the DB is in the cloud
        //await mongoose.connect('mongodb://localhost:27017/PetDB');
            // Goes into .env file to avoid sharing the login & passwords
             // await mongoose.connect('mongodb+srv://<username>:<password>@may23.q5tuvnr.mongodb.net/?retryWrites=true&w=majority')
             // await mongoose.connect('mongodb+srv://pet_db_admin:pet_db_admin_1@may23.q5tuvnr.mongodb.net/?retryWrites=true&w=majority')

        await mongoose.connect(process.env.DB_URI);

        console.log("Database connected");
    } catch (error) {
        console.warn(`database connection failed: ${JSON.stringify(error)}`)
    }
}

module.exports = {
    databaseConnect
}