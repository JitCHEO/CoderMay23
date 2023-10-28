
function rollDice(diceSize = 6){
    // Use math random in a wahy that returns a number between 1 and diceSize
    // Math floor always rounds down, diceSize 6 returns 0-5
    // wee need to +1
    let result = Math.floor(Math.random() * diceSize) +1;
    return result;
}

module.exports = {
    rollDice
}