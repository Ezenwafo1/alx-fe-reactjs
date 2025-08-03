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

export default App;
