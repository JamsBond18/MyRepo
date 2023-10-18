import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About'
import Home from './pages/home/Home'
import User from './pages/users/Users'
import Login from './pages/Login'
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
          </ul>
        </nav> */}
        <Header/>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
