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
    let fruitListItems = someFruit.map((fruit => <li>{fruit}</li>))
    return fruitListItems;
  }

//   module.exports = {FruitList}