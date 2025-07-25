import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  selectedCategory: 'All',
  selectedDifficulty: 'All',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  setCategory: (category) => {
    set({ selectedCategory: category });
    get().filterRecipes();
  },

  setDifficulty: (difficulty) => {
    set({ selectedDifficulty: category });
    get().filterRecipes();
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm, selectedCategory, selectedDifficulty } = get();

    const filtered = recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    set({ filteredRecipes: filtered });
  }
}));

export default useRecipeStore;
