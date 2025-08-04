import axios from 'axios';

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
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
    throw new Error('Looks like we cant find the user');
  }
};
