// src/components/FavoriteButton.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;

