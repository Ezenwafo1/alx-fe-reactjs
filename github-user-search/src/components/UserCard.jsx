import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

function UserCard() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserData(username);
        setUser(data);
        setError('');
      } catch (err) {
        setError(err.message || 'User not found');
        setUser(null);
      }
    };

    loadUser();
  }, [username]);

  if (error) {
    return (
      <div className="text-center text-red-600 text-lg font-semibold mt-6">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-gray-600 text-lg mt-6 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-1">{user.name || user.login}</h2>
      <p className="text-sm text-gray-600 mb-2">{user.bio || 'No bio available'}</p>
      <p className="mb-4">
        <span className="font-semibold">Followers:</span> {user.followers} &nbsp;&nbsp;
        <span className="font-semibold">Following:</span> {user.following}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default UserCard;
