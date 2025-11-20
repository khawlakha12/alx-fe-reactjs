const fetchUserData = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await fetch(
    `https://api.github.com/search/users?q=${query}`
  );

  const data = await response.json();
  return data;
};

export default fetchUserData;
