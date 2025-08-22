// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching, // optional, shows background fetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,      // data considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10,     // cache persists for 10 minutes
    retry: 2,                       // retry failed requests twice
    refetchOnWindowFocus: true,     // auto refetch when window/tab gains focus
    keepPreviousData: true,         // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>

      {/* Manual refetch */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refetch Posts
      </button>

      {/* Optional indicator for background fetching */}
      {isFetching && <p className="text-sm text-gray-500 mb-2">Updating posts...</p>}

      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
