// import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title loggedInUser="Jairo"/>
      <FruitList colour = {"Yellow"} listToShow = {["mangoes", "bananas" , "lemon", "pineapple"]}/>
      <FruitList colour = {"Green"} listToShow = {["lime", "pears" , "apples"]}/>
      <FruitList colour = {"Red"} listToShow = {["strawberry", "cherry" , "blood orange"]}>
        <h5 className="listMessage">Red fruits are delicious</h5>
        <h6>And great for you!</h6>
      </FruitList>
      <Footer dataFromApi="Random data"/>
    </div>

  );
}

export default App;
