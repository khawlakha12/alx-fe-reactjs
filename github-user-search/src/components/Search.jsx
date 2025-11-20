import React, { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await fetchUserData({ username, location, minRepos });

      if (!data.items || data.items.length === 0) {
        setError("Looks like we can’t find the user");
        setResults([]);
      } else {
        setResults(data.items);
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="bg-white p-4 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Search username..."
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repos (optional)"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
