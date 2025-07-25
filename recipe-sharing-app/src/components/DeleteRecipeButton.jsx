import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        background: '#e60000',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        marginLeft: '0.5rem',
        cursor: 'pointer',
      }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;

