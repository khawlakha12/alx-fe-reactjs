import React from "react";
import { useQuery } from "react-query";

export default function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  };

  // React Query useQuery
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000, // cache stays fresh for 5s
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <button onClick={refetch}>
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "12px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
