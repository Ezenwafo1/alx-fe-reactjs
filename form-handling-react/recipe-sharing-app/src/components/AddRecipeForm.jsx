import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
        style={{ marginBottom: '0.5rem', display: 'block' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
        style={{ marginBottom: '0.5rem', display: 'block' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
