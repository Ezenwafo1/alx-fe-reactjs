import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ✅ Make sure this file exists at src/App.jsx
import './index.css'; // ✅ Optional: if you haven’t created this, comment this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
