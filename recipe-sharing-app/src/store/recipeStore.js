const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  selectedCategory: 'All',
  selectedDifficulty: 'All',
  selectedIngredient: '',
  maxCookTime: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  setCategory: (category) => {
    set({ selectedCategory: category });
    get().filterRecipes();
  },
  setDifficulty: (difficulty) => {
    set({ selectedDifficulty: difficulty });
    get().filterRecipes();
  },
  setIngredient: (ingredient) => {
    set({ selectedIngredient: ingredient });
    get().filterRecipes();
  },
  setMaxCookTime: (time) => {
    set({ maxCookTime: time });
    get().filterRecipes();
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const {
      recipes,
      searchTerm,
      selectedCategory,
      selectedDifficulty,
      selectedIngredient,
      maxCookTime
    } = get();

    const filtered = recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      const matchesIngredient =
        !selectedIngredient || recipe.ingredients.some(ing =>
          ing.toLowerCase().includes(selectedIngredient.toLowerCase())
        );
      const matchesCookTime =
        !maxCookTime || parseInt(recipe.cookTime) <= parseInt(maxCookTime);

      return matchesSearch && matchesCategory && matchesDifficulty && matchesIngredient && matchesCookTime;
    });

    set({ filteredRecipes: filtered });
  }
}));
