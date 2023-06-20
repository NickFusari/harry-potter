import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Context from './Components/Context';

function App() {
  return (
    <div className="mains">
      <Router>    
          <Navbar />
          <Context />
      </Router>
    </div>
  );
}

export default App;
