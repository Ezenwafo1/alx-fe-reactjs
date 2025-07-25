import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}
