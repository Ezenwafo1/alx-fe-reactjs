// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";
import AddRecipeForm from "./AddRecipeForm";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // load initial data on mount
  useEffect(() => {
    setRecipes(recipesData);
    console.log("Recipes loaded");
  }, []);

  // Handler to add a new recipe
  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]); // functional update to avoid stale state
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
        Recipe Platform
      </h1>

      {/* Recipes List */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gradient-to-tr from-green-200 via-green-100 to-green-200 shadow-lg rounded-3xl p-6 hover:shadow-2xl transition"
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-2xl font-bold mb-2 text-green-800">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block text-white bg-green-600 px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Add Recipe Form at the bottom */}
      <div className="mt-16">
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
      </div>
    </div>
  );
}

export default HomePage;
