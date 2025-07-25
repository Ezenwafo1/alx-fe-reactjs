import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useRecipeStore from './store/useRecipeStore';
import sampleRecipes from './data/sampleRecipes';

// Pages / Components
import SearchBar from './components/SearchBar';
import FilterControls from './components/FilterControls';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <FilterControls />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
