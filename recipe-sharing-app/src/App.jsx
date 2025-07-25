import { useEffect } from 'react';
import useRecipeStore from './store/useRecipeStore';
import sampleRecipes from './data/sampleRecipes';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import RecipeList from './components/RecipeList';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-4">Recipe Sharing App</h1>
      <SearchBar />
      <FilterDropdown />
      <RecipeList />
    </div>
  );
}

export default App;

