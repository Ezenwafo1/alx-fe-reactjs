// src/App.jsx
import React from 'react';
import RecipeDetail from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // ✅ This was missing
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">All Recipes</Link> |{' '}
        <Link to="/favorites">Favorites</Link> |{' '}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
