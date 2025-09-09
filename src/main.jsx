import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App.jsx';
=======
import App from './App.jsx'; // ✅ Make sure this file exists at src/App.jsx
import './index.css'; // ✅ Optional: if you haven’t created this, comment this line
>>>>>>> 07a04b4 (fixed erorr with packagejson)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
<<<<<<< HEAD
  </React.StrictMode>
=======
  </React.StrictMode>,
>>>>>>> 07a04b4 (fixed erorr with packagejson)
);
