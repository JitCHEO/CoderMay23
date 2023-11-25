import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BusincessCardPage from './pages/BusinessCardPage';
import { Routes, Route, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* this works, may be tedious to handle when there are many nested routes
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/contact' element={<ContactPage />} /> 
        More alternatives available
        */}
        <Route path='/about' element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>


        <Route path='/cards' element={<BusincessCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
