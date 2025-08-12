// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import recipesData from "../data.json"; // Make sure this file is in src/

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data when the component mounts
    setRecipes(Array.isArray(recipesData) ? recipesData : []);
  }, []);

  if (!recipes.length) {
    return (
      <div className="p-6 text-center text-gray-600">
        No recipes found. Please check <code>src/data.json</code>.
      </div>
    );
  }

  return (
    <section className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Recipes</h1>
        <p className="text-gray-600 mt-1">
          A collection of delicious dishes, perfectly styled.
        </p>
      </header>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((r) => {
          const summary = r.summary || "No summary available";

          return (
            <article
              key={r.id ?? r.title}
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col 
                         transition-transform duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="h-48 w-full bg-gray-100">
                {r.image ? (
                  <img
                    src={r.image}
                    alt={r.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {r.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {summary}
                </p>
                <button
                  onClick={() => alert(`Viewing recipe: ${r.title}`)}
                  className="mt-auto px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors"
                >
                  View Recipe
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
