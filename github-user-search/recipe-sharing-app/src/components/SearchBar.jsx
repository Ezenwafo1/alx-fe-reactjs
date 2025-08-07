import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title, e.g. 'Jollof' or 'Fruit Salad'"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default SearchBar;
