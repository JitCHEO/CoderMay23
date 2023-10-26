const fs = require('fs')

let messages = []

function getNames(file){
    let data = null
    try{
        data = fs.readFileSync(file, 'utf-8');
    } catch (error){
        console.warn("Error reading from the file")
        console.error(error.message)
    }

    console.log(data);
    console.log(typeof(data));
}

getNames("names.txt");
module.exports = {
    names: messages
}