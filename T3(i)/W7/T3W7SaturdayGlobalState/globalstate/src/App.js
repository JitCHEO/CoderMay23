
import './App.css';
import ApiTester from './ApiTester';
import ConnectionProvider from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';
import LogoutButton from './LogoutButton';

function App() {
  return (
    <div className="App">
      <UserGlobalData>
      {/* add Provider and the itinial value */}
        <ConnectionProvider>
          <ApiTester />
          <UserDisplay />
          <LogoutButton />
        </ConnectionProvider>
      </UserGlobalData>
      <LogoutButton />
      
    </div>
  );
}

export default App;
