import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-1">{recipe.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category: {recipe.category} | Difficulty: {recipe.difficulty}
            </p>
            <p className="text-sm">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
