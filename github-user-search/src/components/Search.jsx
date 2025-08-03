import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === '') return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={{ ...styles.message, color: 'red' }}>{error}</p>}
      {user && (
        <div style={styles.card}>
          <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    flex: '1',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#24292e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  card: {
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: '100px',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default Search;
