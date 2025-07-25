import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });
    onFinish(); // close the form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '0.5rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onFinish} style={{ marginLeft: '0.5rem' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;

