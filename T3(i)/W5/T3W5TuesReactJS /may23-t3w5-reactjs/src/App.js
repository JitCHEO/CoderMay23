import './App.css';
import FruitList from './FruitList';
import Title from './Title';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Title />
        <ul>
          {
            <FruitList />
          } 
        </ul>
        <ol>
          {
            <FruitList />
          }
        </ol>
        <Footer />
    </div>

  );
}

export default App;
