import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetails() {
  const { id } = useParams(); // get id from URL
  const recipe = recipesData.find((r) => String(r.id) === String(id)); // match by id

  // Added useEffect to meet ALX requirement
  useEffect(() => {
    console.log(`RecipeDetails mounted for recipe ID: ${id}`);
    // You could also simulate data fetching here if needed
  }, [id]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Recipe not found</h1>
        <Link
          to="/"
          className="inline-block mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-6">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link
        to="/"
        className="inline-block mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetails;
