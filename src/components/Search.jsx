import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
<<<<<<< HEAD
  const [page, setPage] = useState(1); // for pagination
=======
  const [page, setPage] = useState(1);
>>>>>>> 07a04b4 (fixed erorr with packagejson)
  const [hasMore, setHasMore] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers([]);
    setPage(1);
    await loadUsers(1, true);
  };

  const loadUsers = async (currentPage, replace = false) => {
    setLoading(true);
    setError('');

    try {
      const result = await fetchUserData({ ...form, page: currentPage });

      if (replace) {
        setUsers(result.users);
      } else {
        setUsers((prev) => [...prev, ...result.users]);
      }

      setHasMore(result.hasMore);
    } catch (err) {
<<<<<<< HEAD
      setError('Looks like we cant find the user');
=======
      setError('Looks like we can’t find the user');
>>>>>>> 07a04b4 (fixed erorr with packagejson)
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    await loadUsers(nextPage);
    setPage(nextPage);
  };

  return (
<<<<<<< HEAD
    <div className="max-w-2xl w-full mx-auto mt-6 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            placeholder="e.g., torvalds"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location (optional)</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            placeholder="e.g., Nigeria"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories (optional)</label>
          <input
            type="number"
            name="minRepos"
            value={form.minRepos}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            placeholder="e.g., 10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 border p-4 rounded shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
                <p className="text-sm text-gray-600">Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}

          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="block w-full bg-gray-800 text-white py-2 mt-4 rounded hover:bg-gray-700"
            >
              Load More
            </button>
          )}
        </div>
      )}
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl w-full p-6 bg-white rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded"
              placeholder="e.g., torvalds"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location (optional)</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded"
              placeholder="e.g., Nigeria"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Minimum Repositories (optional)</label>
            <input
              type="number"
              name="minRepos"
              value={form.minRepos}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded"
              placeholder="e.g., 10"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-center mt-4 text-gray-600 animate-pulse">Loading...</p>}
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}

        {users.length > 0 && (
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 border p-4 rounded shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
                  <p className="text-sm text-gray-600">Repos: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            ))}

            {hasMore && (
              <button
                onClick={handleLoadMore}
                className="block w-full bg-gray-800 text-white py-2 mt-4 rounded hover:bg-gray-700"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
>>>>>>> 07a04b4 (fixed erorr with packagejson)
    </div>
  );
};

export default Search;
