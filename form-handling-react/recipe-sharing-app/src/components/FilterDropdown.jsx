import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const FilterDropdown = () => {
  const selectedCategory = useRecipeStore(state => state.selectedCategory);
  const setCategory = useRecipeStore(state => state.setCategory);
  const selectedDifficulty = useRecipeStore(state => state.selectedDifficulty);
  const setDifficulty = useRecipeStore(state => state.setDifficulty);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Nigerian', 'Dessert'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 px-4 py-2">
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-md"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={selectedDifficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="px-4 py-2 border rounded-md"
      >
        {difficulties.map(diff => (
          <option key={diff} value={diff}>{diff}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;

