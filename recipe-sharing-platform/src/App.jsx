import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // from public/
import "./App.css";
import HomePage from "./components/HomePage"

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Recipe Cards Section */}
      <HomePage />

      {/* Optional: Vite Boilerplate */}
      <div className="p-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-xl font-bold">Vite + React</h1>
        <div className="card mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count}
          </button>
          <p className="mt-2 text-gray-700">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;