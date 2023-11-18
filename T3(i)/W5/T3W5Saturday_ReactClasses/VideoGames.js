const {Media} = require("./Media.js")

class VideoGame extends Media{
    constructor(newName, platform, players=1) {
        super(newName);
        // this.name = newName;
        //this.players = players || 1;
        this.players = players;
        this.platform = platform;

    }

    getVideoGame() { 
        return `${this.name} is a video game for ${this.players} players and can be played in ${this.platform}.`
    }
}

let someVideoGame = new VideoGame("Runescape", "PC", 4);
// console.log(someVideoGame.name);
// console.log(`platform: ${someVideoGame.platform}`);
// console.log(`# of players: ${someVideoGame.players}`)
console.log(someVideoGame.getVideoGame());
// console.log(someVideoGame.getMediaName());
// console.log(someVideoGame.version());
console.log(Media.count);