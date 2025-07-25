const EditRecipeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // <-- THIS IS REQUIRED

    // your logic to update the recipe
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form inputs here */}
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
