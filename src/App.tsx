import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'

const Home = () => <h1>Home Page</h1>;

const Users = () => <h1>Users</h1>;

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/HomePage">Notes</Link>
        <Link to="/users">Users</Link>
      </header>

    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
   

  );
};

export default App;


