import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };

  // React Query with required settings
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // 🔥 REQUIRED OPTIONS
    cacheTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false, // do not refetch on window focus
    keepPreviousData: true, // keep old data during refetch

    staleTime: 5000, // optional stale time
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data?.map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
