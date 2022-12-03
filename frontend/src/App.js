import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar.js'; 
import Dashboard from './components/Dashboard.js'; 

function App() {
  return (
    <div className="App">
      <div> 
        <NavBar />
      </div>
      <div>
        <Dashboard /> 
      </div>
      
    </div>
  );
}

export default App;
