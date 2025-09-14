// src/App.jsx
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent.jsx";

// Create a React Query client
const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("posts"); // simple navigation

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        {/* Navigation buttons */}
        <div className="mb-4 flex justify-center gap-2">
          <button
            onClick={() => setPage("posts")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Posts
          </button>
          <button
            onClick={() => setPage("home")}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Home
          </button>
        </div>

        {/* Conditional rendering based on page */}
        {page === "posts" ? (
          <PostsComponent />
        ) : (
          <div className="text-center mt-8 text-lg font-medium">
            Welcome to the Home Page
          </div>
        )}
      </div>

      {/* React Query DevTools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
