import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id.toString() === id)
  );

  if (!recipe) return <p className="text-center">Recipe not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="text-sm text-gray-500">
        Category: {recipe.category} | Difficulty: {recipe.difficulty}
      </p>
      <p className="mt-2">{recipe.description}</p>
      <p><strong>Recipe ID:</strong> {recipe.id}</p>
      <ul className="list-disc ml-6 mt-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm">Cook Time: {recipe.cookTime} mins</p>
    </div>
  );
};

export default RecipeDetail;
