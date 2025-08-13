import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Using public/data.json so there's no bundler JSON-import issues
  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => setRecipes(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Responsive grid: 1 / 2 / 3 columns */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <article
            key={recipe.id ?? recipe.title}
            className="bg-white rounded-xl shadow-md overflow-hidden
                       transform transition duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

