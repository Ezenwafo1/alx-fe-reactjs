import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

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
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
