import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

function App() {
  return (
    <Router>
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
        <SearchBar />
        <Routes>
          <Route path="/user/:username" element={<UserCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
