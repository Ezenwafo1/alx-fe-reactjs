import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const FilterControls = () => {
  const category = useRecipeStore(state => state.selectedCategory);
  const difficulty = useRecipeStore(state => state.selectedDifficulty);
  const ingredient = useRecipeStore(state => state.selectedIngredient);
  const cookTime = useRecipeStore(state => state.maxCookTime);

  const setCategory = useRecipeStore(state => state.setCategory);
  const setDifficulty = useRecipeStore(state => state.setDifficulty);
  const setIngredient = useRecipeStore(state => state.setIngredient);
  const setCookTime = useRecipeStore(state => state.setMaxCookTime);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 border rounded-xl">
        <option>All</option>
        <option>Breakfast</option>
        <option>Dinner</option>
        <option>Dessert</option>
        <option>Nigerian</option>
      </select>

      <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="px-3 py-2 border rounded-xl">
        <option>All</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input
        type="text"
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
        placeholder="Filter by ingredient"
        className="px-3 py-2 border rounded-xl"
      />

      <input
        type="number"
        value={cookTime}
        onChange={e => setCookTime(e.target.value)}
        placeholder="Max cook time (mins)"
        className="px-3 py-2 border rounded-xl"
      />
    </div>
  );
};

export default FilterControls;

