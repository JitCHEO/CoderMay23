
function rollDice(diceSize = 6){
    // Use math random in a wahy that returns a number between 1 and diceSize
    // Math floor always rounds down, diceSize 6 returns 0-5
    // wee need to +1
    let result = Math.floor(Math.random() * diceSize) +1;
    return result;
}

function rollWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]
    result.finalResult = Math.max(...result.rolls);

    // Working solution, 100% old school
    // if (result.rolls[0]> result.rolls[1]){
    //     result.finalResult = result.rolls[0];
    // } else {
    //     result.finalResult = result.rolls[1];
    // }
    return result;
}

function rollWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]
    result.finalResult = Math.min(...result.rolls);

    // Working solution, 100% old school
    // if (result.rolls[0]> result.rolls[1]){
    //     result.finalResult = result.rolls[0];
    // } else {
    //     result.finalResult = result.rolls[1];
    // }
    return result;
}

module.exports = {
    rollDice, 
    rollWithAdvantage,
    rollWithDisadvantage
}