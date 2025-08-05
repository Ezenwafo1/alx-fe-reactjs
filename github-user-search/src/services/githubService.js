import axios from 'axios';

const BASE_URL = "https://api.github.com";

/**
 * Fetches either:
 * - a single user's full profile (if params is a string)
 * - a list of users with full details based on filters (if params is object)
 */
export const fetchUserData = async (params) => {
  // CASE 1: Fetch single user by username (used in UserCard)
  if (typeof params === 'string') {
    try {
      const response = await axios.get(`${BASE_URL}/users/${params}`);
      return response.data;
    } catch (err) {
      throw new Error("User not found");
    }
  }

  // CASE 2: Fetch user list (used in Search)
  const { username, location, minRepos, page = 1 } = params;
  let query = `${username || ''} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const perPage = 5;

  try {
    const searchRes = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: perPage,
        page,
      },
    });

    const usersBasic = searchRes.data.items;

    // Fetch full details for each user
    const detailedUsers = await Promise.all(
      usersBasic.map((user) =>
        axios.get(`${BASE_URL}/users/${user.login}`).then((res) => res.data)
      )
    );

    return {
      users: detailedUsers,
      hasMore: searchRes.data.total_count > page * perPage,
    };
  } catch (err) {
    throw new Error('Looks like we can’t find the user(s)');
  }
};
