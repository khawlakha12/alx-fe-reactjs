import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : "",
      },
    }
  );

  return response.data;
};

export default fetchUserData;
