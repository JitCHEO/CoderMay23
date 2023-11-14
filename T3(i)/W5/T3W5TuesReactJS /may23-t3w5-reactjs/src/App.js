import './App.css';
import FruitList from './FruitList';
import Title from './Title';

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
    </div>
  );
}

export default App;
