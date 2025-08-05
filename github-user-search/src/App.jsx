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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 font-sans">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>
        <Search onSearch={handleSearch} />
        <Routes>
          <Route path="/user/:username" element={<UserCard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
