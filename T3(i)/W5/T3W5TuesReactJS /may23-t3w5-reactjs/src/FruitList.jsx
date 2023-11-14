//  Array of fruit names

let someFruit = [
    "Mangoes",
    "Pears",
    "Oranges",
    "Bananas",
    "Strawberries",
    "Apples"
  ];
  
  export default function FruitList() {
    // it is not a good practice to use index as a key, if it is an array of objects, use the object id as key
    // let fruitListItems = someFruit.map(((fruit,index) => <li key={index}>{fruit}</li>))
    let fruitListItems = someFruit.map((fruit => <li key={fruit}>{fruit}</li>))

    return fruitListItems;
  }

//   module.exports = {FruitList}