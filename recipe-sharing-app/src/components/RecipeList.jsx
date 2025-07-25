import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import { Link } from 'react-router-dom';

const RecipeList = () => {
 const recipes = useRecipeStore(state => state.filteredRecipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
<<<<<<< HEAD
  const [editingId, setEditingId] = useState(null);
=======
>>>>>>> a1c7041 (added react-router-dom)

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '0.75rem',
              marginBottom: '0.75rem',
              position: 'relative',
            }}
          >
<<<<<<< HEAD
            {editingId === recipe.id ? (
              <EditRecipeForm recipe={recipe} onFinish={() => setEditingId(null)} />
            ) : (
              <>
                <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
                <p>{recipe.description}</p>
                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    background: '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => setEditingId(recipe.id)}
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '4.5rem',
                    background: '#ffa500',
                    color: '#fff',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
              </>
            )}
=======
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: '#ff4d4d',
                color: '#fff',
                border: 'none',
                padding: '0.25rem 0.5rem',
                cursor: 'pointer',
              }}
              onClick={() => deleteRecipe(recipe.id)}
            >
              Delete
            </button>
>>>>>>> a1c7041 (added react-router-dom)
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
