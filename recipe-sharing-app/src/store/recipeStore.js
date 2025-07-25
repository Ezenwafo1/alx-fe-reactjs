import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Automatically filter when search term updates
  },

  // Action to filter recipes based on search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Optional: A method to set all recipes and auto-filter
  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes();
  }
}));

export default useRecipeStore;
