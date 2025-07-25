import React, { useEffect } from 'react';
import useRecipeStore from './store/useRecipeStore';
import sampleRecipes from './data/sampleRecipes';
import SearchBar from './components/SearchBar';
import FilterControls from './components/FilterControls';
import RecipeList from './components/RecipeList';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">Recipe Sharing App</h1>
      <SearchBar />
      <FilterControls />
      <RecipeList />
    </div>
  );
}

export default App;
