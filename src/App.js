import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About'
import Home from './pages/home/Home'
import User from './pages/users/Users'
import Login from './pages/Login'
import Header from './Components/Header';
import SideBar from './Components/sideBar'
function App() {
  return (
    <Router>

      <Header />
      {/* <SideBar/> */}
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/User" element={<User />} />
      </Routes>

    </Router>
  );
}

export default App;
