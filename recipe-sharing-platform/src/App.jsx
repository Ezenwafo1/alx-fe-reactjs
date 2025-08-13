import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Components/HomePage.jsx"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <HomePage />

      {/* Vite boilerplate content */}
      <div className="p-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-xl font-bold">Recipe Sharing Platform</h1>
        <div className="card mt-4">
          <p className="mt-2 text-gray-700">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
