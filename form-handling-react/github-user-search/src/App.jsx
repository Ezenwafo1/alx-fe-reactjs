import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <div className="bg-white p-8 rounded-xl w-full max-w-3xl text-gray-800 shadow-lg">
          <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/user/:username" element={<UserCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
=======

// Separate component to use `useNavigate` (hooks can't be used directly in top-level component)
function Main() {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '3rem',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
    </div>
  );
}

>>>>>>> 56f4c5a (Fix: Convert postcss.config.js to ES module + build ready)
export default App;
