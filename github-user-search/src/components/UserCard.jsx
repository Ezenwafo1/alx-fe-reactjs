import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGitHubUser } from '../services/githubService';

function UserCard() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchGitHubUser(username);
        setUser(data);
        setError('');
      } catch (err) {
        setError(err.message);
        setUser(null);
      }
    };
    loadUser();
  }, [username]);

  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!user) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '1.5rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: '100px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>
        <strong>Followers:</strong> {user.followers} &nbsp;&nbsp;
        <strong>Following:</strong> {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default UserCard;
