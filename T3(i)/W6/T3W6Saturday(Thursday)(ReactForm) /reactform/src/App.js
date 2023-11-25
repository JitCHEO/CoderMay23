import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusincessCardPage from './pages/BusinessCardPage';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cards' element={<BusincessCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
