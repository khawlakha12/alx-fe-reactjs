import React, { useState } from "react";
import advancedSearch from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await advancedSearch(username, location, minRepos, 1);
      setResults(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await advancedSearch(username, location, minRepos, nextPage);
      setResults((prev) => [...prev, ...data.items]);
    } catch (err) {
      setError("An error occurred while loading more users");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow p-6 rounded-lg space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Advanced GitHub Search</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location (e.g. Morocco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="mt-8 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-gray-100 p-4 rounded"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                className="text-blue-600 underline"
                target="_blank"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {results.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
