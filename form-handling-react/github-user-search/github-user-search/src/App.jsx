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

export default App;
