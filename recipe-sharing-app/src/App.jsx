// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
      <div>
        <RecipeList />
      </div>
      <div>
        <FavoritesList />
      </div>
      <div>
        <RecommendationsList />
      </div>
    </div>
  );
}

export default App;
