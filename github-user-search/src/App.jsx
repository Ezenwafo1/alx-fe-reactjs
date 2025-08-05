import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-900 text-white font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
    </div>
  );
}

export default App;
