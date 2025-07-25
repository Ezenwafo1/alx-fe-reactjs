import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { getRecipeById, updateRecipe } = useRecipeStore();
  const recipe = getRecipeById(recipeId);

  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe(recipeId, {
      title,
      ingredients,
      instructions,
    });

    // optionally redirect or close the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
