import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home'


function App() {
  return (
    <Router>
      <nav>
  
        <Link to="/Home" >Home</Link> &nbsp;|&nbsp;
        <Link to= "/">Back</Link>
        <Routes>
        <Route path="/Home" element={<Home />} />
       
      </Routes>

      </nav>

      <hr />

      
    </Router>
  );
}

export default App;