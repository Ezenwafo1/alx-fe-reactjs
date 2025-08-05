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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl text-white text-center shadow-lg">
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
