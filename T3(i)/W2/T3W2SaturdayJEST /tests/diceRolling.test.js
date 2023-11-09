const {rollDice, rollWithAdvantage, rollWithDisadvantage} = require('../src/diceRolling')

// beforeAll(() => {
//     console.log("Message runs at the beginning of the testing");
// })

// afterAll(() => {
//     console.log("Message runs at the end of the testing");
// })

// beforeEach(() => {
//     console.log("Message runs before each individual test");
// })

// afterEach(() => {
//     console.log("Message runs after each individual test");
// })

describe("Casual tabletop gamer...", () => {

    test("... wants to roll a D6 and see a valid result.", () =>{
        expect(rollDice()).toBeGreaterThan(0);
        expect(rollDice()).toBeLessThanOrEqual(6);
        // let diceResult = rollDice();
        // expect(diceResult).toBeGreaterThan(0);
        // expect(diceResult).toBeLessThanOrEqual(6)
        
    })
})

describe("Tabletop RPG gamer...", () => {
    test("..wants to roll a D20 with advantage and see both roll results as well the best roll", () => {
        // let rollDiceWithAdvantage = jest.fn().mockReturnValue({
        //     finalResult: 18,
        //     rolls: [ 4, 18 ],
        //     jwt: "asfsdadfhadr"
        // })
        // console.log(rollDiceWithAdvantage());
        // expect(rollDiceWithAdvantage().finalResult).toBe(18);
        let rollResults = rollWithAdvantage(20);
        console.log(rollResults.finalResult);
        console.log(rollResults.rolls);
        expect(rollResults.finalResult).toBeGreaterThan(0);
        expect(rollResults.finalResult).toBeLessThanOrEqual(20);
        expect(rollResults.rolls).toHaveLength(2);
        expect(rollResults.rolls).toContain(rollResults.finalResult);
        expect(rollResults.finalResult).toBe(Math.max(...rollResults.rolls));
    });

    test("..wants to roll a D20 with disadvantage and see both roll results as well the worst roll", () => {
        let rollResults = rollWithDisadvantage(20);
        console.log(rollResults.finalResult);
        console.log(rollResults.rolls);
        expect(rollResults.finalResult).toBeGreaterThan(0);
        expect(rollResults.finalResult).toBeLessThanOrEqual(20);
        expect(rollResults.rolls).toHaveLength(2);
        expect(rollResults.rolls).toContain(rollResults.finalResult);
        expect(rollResults.finalResult).toBe(Math.min(...rollResults.rolls));
    });

    test.skip("...wants to roll a D20 one hundred times and see how many natural 20s they get", () => {
        let diceResults = [];
        for (let i = 0; i < 100 ; i++){
            diceResults.push(rollDice(20))
        }

        //console.log(diceResults);
        //expect(diceResults.length).toEqual(100);
        expect(diceResults).toContain(20);
        expect(diceResults).toHaveLength(100);
    });

    // In D&D, we have these dice:
    // D4, D6, D8, D10, D12, D20, D100
    describe("...wants to roll a variety of dice. Specially they want to roll a ...", ()=> {
        let diceVarieties = [
            {
                diceSize: 4,
                diceName: "D4"
            },
            {
                diceSize: 6,
                diceName: "D6"
            },
            {
                diceSize: 8,
                diceName: "D8"
            },
            {
                diceSize: 10,
                diceName: "D10"
            },
            {
                diceSize: 12,
                diceName: "D12"
            },
            {
                diceSize: 20,
                diceName: "D20"
            },
            {
                diceSize: 100,
                diceName: "D100"
            },
        ];
        test.each(diceVarieties)("$diceName", (diceObj) => {

            let diceResult = rollDice(diceObj.diceSize);
            //console.log(`Dice rolling of ${diceObj.diceName} returned ${diceResult}`)
            expect(diceResult).toBeGreaterThan(0);
            expect(rollDice(diceResult)).toBeLessThanOrEqual(diceObj.diceSize);
            // expect(rollDice(diceObj.diceSize)).toBeGreaterThan(0);
            // expect(rollDice(diceObj.diceSize)).toBeLessThanOrEqual(diceObj.diceSize)
        })
        // test("D4", () => {
        //     expect(rollDice(4)).toBeGreaterThan(0);
        // })
        // test("D6", () => {
        //     expect(rollDice()).toBeGreaterThan(0);
        // })
        // test("D8", () => {
        //     expect(rollDice(8)).toBeGreaterThan(0);
        // })
    })
})