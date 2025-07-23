import React from 'react';
import { UserProvider } from './context/UserContext.jsx';
import UserProfile from './components/UserProfile';

["UserContext.Provider", "value"]

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Profile</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
