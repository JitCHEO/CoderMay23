import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <FruitList colour = {"Yellow"} listToShow = {["Mangoes", "Bananas", "Lemons"]}/>
      <FruitList colour = {"Green"} listToShow = {["Limes", "Pears", "Apples"]} />
      <Footer />
    </div>

  );
}

export default App;
