// Array of fruit names:

let someFruit = [
  "mangoes",
  "pears",
  "oranges",
  "bananas",
  "strawberries",
  "apples"
];


export default function FruitList (props) {
  // it's not a good practice to use index as a key, if it's an array of objects, use the object id as a key
  // let fruitListItems = someFruit.map(((fruit,index) => <li key={index}>{fruit}</li>))
  if (props.listToShow.includes("durian")){
    return null;
  }

  let fruitListItems = props.listToShow.map((fruit => <li key={fruit}>{fruit}</li>))
  console.log(props.children);
  return (
    <>
      <h3>{props.colour} fruits</h3>
      <ul>
        {fruitListItems}
      </ul>
      {props.children}
    </>
    
  )
}

//   module.exports = FruitList